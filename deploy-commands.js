//Used to register and update the slash commands for the bot. run "node deploy-commands.js" to register.
const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');

const globalCommands = [];
const guildCommands = [];
// Grab all the command folders from the commands directory you created earlier
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    // Grab all the command files from the commands directory you created earlier
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs
        .readdirSync(commandsPath)
        .filter((file) => file.endsWith('.js'));
    // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        if ('data' in command && 'execute' in command) {
            if (command.private) {
                guildCommands.push(command.data.toJSON());
            } else {
                globalCommands.push(command.data.toJSON());
            }
        } else {
            console.log(
                `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property and therefore was not deployed.`
            );
        }
    }
}

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// and deploy your commands!
(async () => {
    try {
        console.log(
            `Started refreshing ${guildCommands.length} Guild and ${globalCommands.length} Global application (/) commands.`
        );

        // The put method is used to fully refresh all commands in the guild with the current set
        const guildData = await rest.put(
            Routes.applicationGuildCommands(clientId, guildId), // remove guildId to deploy global commands (https://discordjs.guide/creating-your-bot/command-deployment.html#global-commands)
            { body: guildCommands }
        );

        const globalData = await rest.put(
            Routes.applicationCommands(clientId),
            { body: globalCommands }
        );

        console.log(
            `Successfully reloaded ${guildData.length} Guild and ${globalData.length} Global application (/) commands.`
        );
    } catch (error) {
        // And of course, make sure you catch and log any errors!
        console.error(error);
    }
})();
