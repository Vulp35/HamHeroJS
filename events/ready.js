// When the client is ready, run this code (only once).
const { Events } = require('discord.js');

module.exports = {
    // Which even this file is for
	name: Events.ClientReady,
    // Holds boolean that specifies if the even should only run once
	once: true,
    // Holds event logic. Will be called whenever the event emits.
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};