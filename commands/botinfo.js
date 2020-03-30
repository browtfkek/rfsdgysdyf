module.exports = {
	name: 'botinfo',
	aliases: ['binfo'],
	description: 'Displays information about the Santa Claus bot.',
	execute(message, args) {
		message.channel.bulkDelete(1);
		message.channel.send('Hello, I am Santa Claus! I am a bot created by `Wraith Light#7460.` He isn\'t ready to fully code me yet because he is currently still learning JavaScript! He is following guides and tutorials and hopes to make me into a much better bot in the future. Once he knows everything he needs to know, he will make me into a multipurpose bot with a very fun game, moderation commands, fun commands, and much more! Stay tuned and join the official Support Server for me to get help and stay updated! || https://discord.gg/FbvpWh5');
	},
};