const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
	console.log('Запустился бот' + bot.user);
})

bot.on('message',message => {
	if(message.content == '.найтискрипт Counter Blox') message.channel.send('Counter Blox = https://pastebin.com/kMKAB2Cm');
	if(message.content == '.найтискрипт A Bizarre Day') message.channel.send('A Bizarre Day = https://pastebin.com/1BKgPiJL');
	if(message.content == '.найтискрипт Minecraft') message.channel.send('Minecraft = https://ru-minecraft.ru/cheats/46497-wurst-cheat.html');
})

bot.login('NzQzMzU5MDE0NjQ5MzMxNzEy.XzThCA.4yYG6wkvSqbQuAOlD7DvFtOZ29Q');



