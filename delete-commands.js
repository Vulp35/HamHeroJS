//Used to register and update the slash commands for the bot. run "node deploy-commands.js" to register.
const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');


// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// for guild-based commands
rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })
	.then(() => console.log('Successfully deleted all guild commands.'))
	.catch(console.error);

// for global commands
rest.put(Routes.applicationCommands(clientId), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);