const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('uptime')
        .setDescription('uptime of the bot'),
    async execute(interaction) {
        const botUptime = Math.floor(Date.now() / 1_000 - process.uptime());
        await interaction.reply({
            content: `I was started <t:${botUptime}:R>.`,
            ephemeral: true,
        });
    },
};
