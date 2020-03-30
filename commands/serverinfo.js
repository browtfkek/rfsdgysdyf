module.exports = {
	name: 'serverinfo',
	aliases: ['sinfo'],
	description: 'Shows info based on the server you\'re in.',
	execute(message, args) {
		message.channel.bulkDelete(1);
		message.channel.send(`This server's name is **${message.guild.name}**\nTotal Members: **${message.guild.memberCount}** (including bots)\nCreation Date: **${message.guild.createdAt}**\nServer Owner:** ${message.guild.owner}**`);
	},
};