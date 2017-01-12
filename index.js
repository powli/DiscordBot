/**
 * Created by powl on 01.01.2017.
 */
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Client ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        console.log(message);
        message.reply('pong');
    }
});

client.login("<token>");
