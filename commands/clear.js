module.exports = {
  name: 'clear',
  aliases: ['c'],
	description: 'Clears 1-99 messages.',
	execute(message, args) {
let myRole = message.guild.roles.find(role => role.name === "Santa\'s Helpers");
if(message.member.roles.some(r=>["Santa\'s Helpers"].includes(r.name))) {
    const amount = parseInt(args[0]) + 1;
    if (isNaN(amount)) {
        return message.reply('next time try putting in an amount of messages to delete...');
    } else if (amount <= 1 || amount > 100) {
        return message.reply('you can only clear between 1 and 99 messages...');
    }
    message.channel.bulkDelete(amount);
  } else {
    return message.reply('You must be one of my helpers to be able to use this command!')
  }
	},
};