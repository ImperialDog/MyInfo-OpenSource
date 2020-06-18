
const Discord = require('discord.js');
const bot = new Discord.Client();
const SERIAL_KEY = 'JYRE-HGTY-OIUH' 
const SERIAL_KEY2 = 'AAAA-AAAA-AAAA'
const SERIAL_KEY3 = 'UBQP-UNVW-JUSL'
const SERIAL_KEY4 = 'JONQ-IMQA-POLM'
const SERIAL_KEY5 = 'AJUY-HGTC-IUYB'
const PREFIX = ':';
const keys = ('JYRE-HGTY-OIUH', 'AAAA-AAAA-AAAA','UBQP-UNVW-JUSL','JONQ-IMQA-POLM','AJUY-HGTC-IUYB')
const dateOfPurchase = "N/A"
var loaded = true

const SupportTeamIn = new Discord.MessageEmbed()
    .setTitle('Support Ticket!')
    .setDescription('This is your support ticket, please state your issue/question bellow and a staff member will answer your questions or help you. If you have gotten the help you needed, close the ticket by running `:close-ticket`.')
    .setFooter('Made by TheDiamondMurder | MyInfo')


var userTickets = new Map(); 

const token = 'NzAwMzk4MjQ2NTY0MjAwNDk5.Xqw0PA.vory8WBL5MeFtDDLV97fNdxQvY8'
var activeSubscription = false
var BotBuyer = "Nobody"
var activeBotDelete = false

// Modules referencing

guild001 = require("./guild_data/hub")
guild002 = require("./guild_data/porter")
guild003 = require("./guild_data/chaos-empire")
guild004 = require("./guild_data/bot-testing")


// Addon Bots

ticket_bot = require("./ticket")

bot.on('ready', () =>{
    console.log('Main File Loaded')
    bot.user.setActivity(`Made by TheDiamondMurder`)
})


bot.on("message", async message => {
    
    let args = message.content.substring(PREFIX.length).split(" ");
    if(message.content == "check my status"){
        message.channel.send('You do `:check`')
    }

   switch(args[0]){
    case 'check':
        if(!message.content.startsWith(PREFIX)) return;
        if (message.guild.name == "Porter Air","myInfo Bot Hub") {
             if(message.guild.name == "Porter Air"){
                message.channel.send('You are on the database!')
             }
             if(message.guild.name == "myInfo Bot Hub"){
                message.channel.send('You are on the database!')
             }
        }else{
          message.channel.send('You are not registered on the database. Contact support in https://discord.gg/dcGhd36 ')
        }
    }
})
bot.login(token);