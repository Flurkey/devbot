const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`Bot's ready! ${bot.user.username}`);

  try {
	  let link = await bot.generateInvite(["ADMINISTRATOR"]);
	  console.log(link);
	} catch(e) {
		console.log(e.stack);
	}
});

bot.on("message", message => {
	if (message.author === bot.user) return;
	if (message.content.startsWith('Ping')) {
		message.channel.sendMessage(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
	}
});

bot.login(botSettings.token)
