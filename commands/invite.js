module.exports = {
	name: 'invite',
	aliases: ['inv'],
	description: 'Sends the link to invite the bot to a server.',
	execute(message, args) {
        message.channel.bulkDelete(1);
		message.channel.send('**__Invite Bot:__** https://discordapp.com/api/oauth2/authorizeclient_id=649424207712878623&permissions=8&scope=bot\n\n**__Join Server:__**\nhttps://discord.gg/FbvpWh5');
	},
};