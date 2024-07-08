// Listener for Client#interactionCreate event. This executes code whenever the bot receives an interaction (not every interaction is a slash command).

const { Events } = require('discord.js');

module.exports = {
    // Which even this file is for
	name: Events.InteractionCreate,
    // Holds event logic. Will be called whenever the event emits.
	async execute(interaction) {
        // makes event only runs when a command is given
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
			} else {
				await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
			}
		}
	},
};