const Discord = require('discord.js');
const { Client, Attachment } = require('discord.js');
const bot = new Client();

const token = '';

const PREFIX = ')';

bot.on('ready', () => {
    console.log('PineCon is now online');
    bot.user.setActivity('(help')
})


bot.login(token);
