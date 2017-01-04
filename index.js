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

client.login('MjY1MjIzNjI5OTA0Njc0ODE2.C07eNA.A7nYh9zA8BDWGvlsuy6pXJJPtuk');