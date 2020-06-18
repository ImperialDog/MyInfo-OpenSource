
const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = ':';


const token = 'Your-Token'





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
        case 'help':
        if(!message.content.startsWith(PREFIX)) return;
        if(!message.guild.id == "697785121696251964") return;
        let Settings1 = ['`add-r` `remove-r` `setup` `perms` `create-channel`']
        let Settings2 = ['`change-topic` `set-nsfw` `nsfw-off` `slowmode`']
        let Settings3 = ['`slowoff` `create-rank` `set-wod`']

        let Settings = [Settings1 , Settings2, Settings3]
         const embed = new Discord.MessageEmbed()
         .setTitle('Commands for Hub')
         .addField('**General**' , '`invite` `status`')
         .addField('**Fun**' , '`rate` `smashpass` `flip` `word-of-the-day`')
         .addField('**Settings**', Settings)
         .addField('**Developer**','`gen`')
         .addField('**Moderation**','`clear` `say` `announce` `report` `mute` `un-mute`')
         .setColor(0x03fcf4)
         .setFooter('myInfo Bot')
         message.channel.send(embed);
         break;
    case 'say':
        if(!message.content.startsWith(PREFIX)) return;
        if(!message.guild.id == "697785121696251964") return;
        message.channel.send(message.content.slice(4))
        message.delete()
        break;
    case 'clear':
        if(!message.content.startsWith(PREFIX)) return;
        if(!message.guild.id == "697785121696251964") return;
        message.channel.bulkDelete((args[1]))
        message.channel.send('Deleted messages!')
        break;
    case 'announce':
        if(!args[1]) return message.author.send('Your message must be at least 1 word long to make a successfull announcement.')
        if(!message.content.startsWith(PREFIX)) return;
        if(!message.member.roles.cache.find(r => r.name === Advanced)) return message.channel.send(':red_circle: You do not have the permissions for this!')
        if(!message.guild.id == "697785121696251964") return;
        const AnnounceEmbed = new Discord.MessageEmbed()
        .setTitle('Announcement @everyone')
        .setColor(0x00ec0c)
        .setAuthor(message.author.username)
        .setDescription(message.content.slice(9))
        .setFooter('Made by TheDiamondMurder | myInfo')
        message.delete()
        message.channel.send(AnnounceEmbed)
        break;
    case 'rate':
        if(!message.content.startsWith(PREFIX)) return;
        if(!message.guild.id == "697785121696251964") return;
        if(!args[1]) return message.reply('Please write what I should rate.')
        let rates = ["Terrible, I give it a **0**","Very Super Bad, Its a... **1**","Super Bad, im gonna say, **2**","Very Bad, its going to have to be a **3**","Bad, **4**","Idk, **5**","Decent **6**","Good, its a hard **7**","Very good, smash it an **8**","Amazing, rated a **9**","Godly, its a **10!!**"];

        let result = Math.floor((Math.random() * rates.length))
        let Rating = new Discord.MessageEmbed()
        .setTitle('Rating')
        .setColor(0x00ec0c)
        .setAuthor(message.author.username)
        .setDescription(rates[result])
        message.channel.send(Rating)
        break;
    case 'smashpass':
        if(!message.content.startsWith(PREFIX)) return;
        if(!message.guild.id == "697785121696251964") return;
        if(!args[1]) return message.reply('Pleasw write what I should smashpass.')
        let smash = ["Smash it good","Smash it hard","Pass it like woop","Hard pass","uhhh idk"]

        let smashResult = Math.floor((Math.random() * smash.length))
        let Smashing = new Discord.MessageEmbed()
        .setTitle('Smash Pass Result')
        .setDescription(message.content.slice(10))
        .addField('Result',smash[smashResult])
        .setAuthor(message.author.username)
        .setColor(0x00ec0c)

        message.channel.send(Smashing)
        break;
    case 'flip':
        if(!message.content.startsWith(PREFIX)) return;
        if(!message.guild.id == "697785121696251964") return;
        if(!args[1]) return message.reply('Please place a bet on either, heads or tails')
        let Coin = ["Heads","Tails"]
        
        let CoinFlip = Math.floor((Math.random() * Coin.length))
        message.reply(`You got ${Coin[CoinFlip]}`)
        break;
    case 'add-r':
        if(!message.content.startsWith(PREFIX)) return;
        if (!message.member.hasPermission("ADMINISTRATOR",explict = true)) return message.channel.send(':red_circle: You dont have the permissions to use this command!')
        serverRules = message.content.slice(6)
        message.delete()
        message.channel.send(':green_circle: Updated rules!  To check rules, please do `/rules`')
        break;
    case 'rules':
        if(!message.content.startsWith(PREFIX)) return;
        const Rules = new Discord.MessageEmbed()
        .setTitle('Rules for this server.')
        .setDescription(serverRules)
        .setColor(0xFF9400)
        .addField('Notice something wrong, or something is not there?','Contact a server administrator.')
         message.channel.send(Rules)
        break;
    case 'guild':
        if(!message.content.startsWith(PREFIX)) return;
        const GuildInfo = new Discord.MessageEmbed()
        .setTitle('Guild Information')
        .setDescription('Information on this guild')
        .addField('Subscription Type','[Days: 1,150]')
        .addField('Expiry Date','25th June 2023')
        .addField('Guild Name', message.guild.name)
        .setColor(0xFF9400)
        .addField('Guild Owner','TheDiamondMurder')
        .addField('Guild Type','Official Group')   // Official Group, Administrator Group, Sponsored Group, Friends Group, Regular Group
        message.channel.send(GuildInfo)
        message.delete()
        break;
    case 'invite':
        if(!message.content.startsWith(PREFIX)) return;
        if(!args[1]) return message.reply('Please choose a bot to invite. `invite ticket-man`')
        if (args[1] == "ticket-man"){
            message.channel.send('https://discordapp.com/oauth2/authorize?client_id=705426417558749228&scope=bot&permissions=2146958847')
            break;
        }
        case 'remove-r':
            if(!message.content.startsWith(PREFIX)) return;
            if (!message.member.hasPermission("ADMINISTRATOR",explict = true)) return message.channel.send(':red_circle: You dont have the permissions to use this command!')
            serverRules = "No server rules set."
            message.channel.send(':green_circle: Done.')
            break;   
        case 'gen':
            if(!message.content.startsWith(PREFIX)) return;
            if(message.member.id == '379322954896375820'){
            let FinalLine = Math.floor( Math.random() *1000000000+9999999999 )

            const KeyEmbed = new Discord.MessageEmbed()
            .setTitle('Generated Codes')
            .setDescription(FinalLine)
            message.author.send(KeyEmbed)
            message.channel.send('Code Generated!')
            break;
            }else{
                message.channel.send(':red_circle: You do not have the permissions to use that command! You require `Developer` for this command.')
            }     
            break;
        case 'report':
            if(!message.content.startsWith(PREFIX)) return;
            if(args[2]) return message.channel.send('🔴Please include the name of the person you are reporting and the reason in the format: `/report [Username] [Reason]')
            var ReportChannel = bot.channels.cache(channel => channel.id === "662353419415322624")
            const Report = new Discord.MessageEmbed()
            .setTitle('New Report')
            .setDescription(message.content.slice(args[2]))
            .addField('User reporting',message.member.username)
            .addField('Target',args[1])
            message.ReportChannel.send(Report)
            message.channel.send('🟢 User has been reported!')
            break;
        case 'setup':
            if(!message.content.startsWith(PREFIX)) return;
            if(!message.member.hasPermission("MANAGE_ROLES",explict = true)) return message.channel.send(noMR)
            message.guild.roles.create({
                data: {
                  name: 'Basic',
                  color: 'BLUE',
                },
                reason: 'we needed a role for Super Cool People',
              })
                .then(console.log)
                .catch(console.error);
                message.guild.roles.create({
                    data: {
                      name: 'Advanced',
                      color: 'BLUE',
                    },
                    reason: 'we needed a role for Super Cool People',
                  })
                    .then(console.log)
                    .catch(console.error);
                    message.guild.roles.create({
                        data: {
                          name: 'Owner',
                          color: 'BLUE',
                        },
                        reason: 'we needed a role for Super Cool People',
                      })
                        .then(console.log)
                        .catch(console.error);
                        message.guild.roles.create({
                            data: {
                              name: 'myInfo_Verifed',
                              color: 'RED',
                            },
                            reason: 'Verified Role.',
                          })
                            .then(console.log)
                            .catch(console.error);
                            message.guild.roles.create({
                                data: {
                                  name: 'NoCommand',
                                  color: 'WHITE',
                                },
                                reason: 'Verified Role.',
                              })
                                .then(console.log)
                                .catch(console.error);
            
            message.channel.send('🟢Setup Complete! Created: `Basic`,`Advanced`,`Owner`')
            break;
            case 'perms':
                if(!message.content.startsWith(PREFIX)) return;
                // Basic / Advanced / Owner
                let PermissionsList = ['**Announce** Advanced','**Say** Basic','**Clear** Advanced','**Generate Serial Keys** Devloper','**Add Rules** Advanced','**Remove Rules** Owner','**Set Channel Topic** Owner','**Set Channel Name** Owner','**SetNSFW** Advanced','**Create Rank** Advanced','**Word of The Day** Basic','**Create Channel** Advanced','**Slowmode** Basic']
                let avatar = message.author.displayAvatarURL
                const Perms = new Discord.MessageEmbed()
                .setTitle('__Permissions__')
                .setDescription(PermissionsList)
                .addField('**__Note__**','**Only developer can change these for certain guilds!**')
                .setColor(0x00ec0c)
                .setAuthor(`${message.author.username}`)
                .setImage(avatar)
                message.channel.send(Perms)
                break;
            case 'status':
                if(!message.content.startsWith(PREFIX)) return;
                let Members = message.guild.memberCount
                message.channel.send(`There are **${Members}** members in this server.`)
                break;
            case 'create-channel':
                if(!message.content.startsWith(PREFIX)) return;
                if(!message.member.roles.cache.find(r => r.name === Advanced)) return message.channel.send(':red_circle: You do not have the permissions for this!')
                if(!args[1]) return message.channel.send('🟡 Please specifiy what you want the channel to be called, and the name of the category')
                message.channel.send(`🟢 Created the channel under the name of **${args[1]}**`)
                message.guild.channels.create(args[1]) 
                let guild = message.guild;
                message.guild.channels.create(`${args[1]}`, {
                type: 'text', 
             })
             break;
             case 'change-name':
                if(!message.content.startsWith(PREFIX)) return;
                if(!message.member.roles.cache.find(r => r.name === 'Owner')) return message.channel.send(':red_circle: You do not have the permissions for this!')
                var PreviousName = message.channel.name
                message.channel.setName(message.content.slice(13))
                message.channel.setName(message.content.slice(13))
                message.channel.setName(message.content.slice(13))
                message.channel.setName(message.content.slice(13))
                message.channel.setName(message.content.slice(13))
                message.channel.send(`Changed channel name from **${PreviousName}** to **${args[1]}**!`)
                break;
            case 'change-topic':
                if(!message.content.startsWith(PREFIX)) return;
                if(!message.member.roles.cache.find(r => r.name === 'Owner')) return message.channel.send(':red_circle: You do not have the permissions for this!')
                message.channel.setTopic(message.content.slice(14))
                message.channel.send('🟢 Changes have been made.')
                break;
            case 'set-nsfw':
                if(!message.content.startsWith(PREFIX)) return;
                if(!message.member.roles.cache.find(r => r.name === Advanced)) return message.channel.send(':red_circle: You do not have the permissions for this!')
                if(!message.channel.nsfw == false) return message.channel.send('🔴 Channel is already set as NSFW')
                message.channel.setNSFW(true)
                message.channel.send('🟢 Channel Set to NSFW!')
                break;
            case 'nsfw-off':
                if(!message.content.startsWith(PREFIX)) return;
                if(!message.member.roles.cache.find(r => r.name === Advanced)) return message.channel.send(':red_circle: You do not have the permissions for this!')
                if(!message.channel.nsfw == true) return message.channel.send('🔴 Channel is already non-NSFW')
                message.channel.setNSFW(false)
                message.channel.send('🟢 NSFW off!')
                break;
            case 'slowmode':
                if(!message.content.startsWith(PREFIX)) return;
                if(!message.member.roles.cache.find(r => r.name === BasicPerm)) return message.channel.send(':red_circle: You do not have the permissions for this!')
                if(!args[1]) return message.channel.send('Please include the slowmode time.')
                if(!args[1] == "0") return message.channel.send('Please run `/slowoff` to turn off slowmode')
                message.channel.setRateLimitPerUser(args[1])
                break;
            case 'slowoff':
                if(!message.content.startsWith(PREFIX)) return;
                if(!message.member.roles.cache.find(r => r.name === BasicPerm)) return message.channel.send(':red_circle: You do not have the permissions for this!')
                if(!message.channel.rateLimitPerUser == 0) return message.channel.send('There is no slowmode.... idiot.')
                message.channel.setRateLimitPerUser(0) 
                break;
            case 'create-rank':
                if(!message.content.startsWith(PREFIX)) return;
                if(!message.member.roles.cache.find(r => r.name === Advanced)) return message.channel.send(':red_circle: You do not have the permissions for this!')
                if(!args[1]) return message.channel.send('Please name the rank.')
                message.guild.roles.create({
                    data: {
                      name: args[1],
                      color: 'GREEN',
                    },
                    reason: 'Activated Command.',
                  })
                message.channel.send(`Created rank with the name of **${args[1]}**`)
                break;
            case 'word-of-the-day':
                if(!message.content.startsWith(PREFIX)) return;
                message.channel.send(`Word of the day is: **${WordOfTheDay}**`)
                break;
            case 'set-wod':
                if(!message.content.startsWith(PREFIX)) return;
                if(!message.member.roles.cache.find(r => r.name === BasicPerm)) return message.channel.send(':red_circle: You do not have the permissions for this!')
                if(!args[1]) return message.channel.send('Please provide a Word Of The Day.')
                WordOfTheDay = message.content.slice(9)
                message.author.send(`Set word of the day to ${WordOfTheDay}`)
                break;
            case 'mute':
                if(!message.member.roles.cache.find(r => r.name === 'Owner')) return message.channel.send(':red_circle: You do not have the permissions for this!')
                if(!args[1]) return message.channel.send('Please pick a user to mute.')
                let memberM = message.mentions.members.first();
                let mutedRole = message.guild.roles.cache.find(role => role.name == "Muted");
                
                memberM.send(`You have been muted on the Official MyInfo Bot Hub server.`)
                memberM.roles.add(mutedRole, `Muted`);
                message.channel.send(`🟢 Succesfully muted ${memberM}`)
                break;
            case 'un-mute':
                if(!message.member.roles.cache.find(r => r.name === 'Owner')) return message.channel.send(':red_circle: You do not have the permissions for this!')
                if(!args[1]) return message.channel.send('Please pick a user to un-mute.')
                let Member2 =  message.mentions.members.first();
                let AnotherMuted = message.guild.roles.cache.find(role => role.name == "Muted");
                if(message.guild.roles.cache.find(role => role.name == "Muted")){
                    Member2.roles.remove(AnotherMuted, `Un-Muted`);
                    message.channel.send(`🟢 Succesfully unmuted ${Member2}`)
                    break;
                }else{
                    message.channel.send('🔴 User is not muted')
                    break;
                }
            case 'dm-user':
                if(!message.member.roles.cache.find(r => r.name === 'Owner')) return message.channel.send(':red_circle: You do not have the permissions for this!')
                let Subject = message.mentions.members.first();
                let USG = (args[1].length)
                const DMEmbed = new Discord.MessageEmbed()
                .setTitle('Woop woop! You got mail!')
                .setDescription(message.content.slice(USG + 9))
                Subject.send(DMEmbed)
                message.delete()
                message.author.send('You have sent a message!')
                break;
                case 'test-embeds':
                    message.channel.send(NoActiveSub)
                    message.channel.send(ExpiredSub)
                    message.channel.send(Blacklist)
                    break;
            case 'redeem':
                if(!args[1]) return message.reply('Please enter your serial key, do not worry, your serial key will be hidden.')
                let ORDER_ID = Math.floor( Math.random() * 100 + 900000 )
                const Redeeming = new Discord.MessageEmbed()
                
                .setTitle('User Redeeming')
                .setDescription('A user has sent a redeeming request!')
                .addField('Discord User', message.author.tag ,true)
                .addField('User ID', message.author.id, true)
                .addField('Code Redeemed:', args[1])
                .addField('Order ID', ORDER_ID, true)
                message.guild.owner.send(Redeeming)
                message.delete()
                message.channel.send('Your request for your serial key has been sent, please check your DMs for a reciept')
                message.author.send(`ORDER ID: ${ORDER_ID}`)
                message.author.send(`SERIAL KEY: ${args[1]}`)
                message.author.send(`Make sure your DMs are enabled otherwise the Owner wont be able to DM you!`)
            case 'give-role':
                if(!message.member.roles.cache.find(r => r.name === 'Owner')) return message.channel.send(':red_circle: You do not have the permissions for this!')
                if(!args[2]) return message.channel.send('Please pick a user and a role to give')
                let MentionedUser = message.mentions.members.first();
                let GavenRole = message.guild.roles.cache.find(role => role.name == args[2]);

                MentionedUser.roles.add(GavenRole, `Given role.`)
                message.channel.send(`Gaven ${MentionedUser} a role called **${GavenRole}**`)
                break;
            case 'remove-role':
                if(!message.member.roles.cache.find(r => r.name === 'Owner')) return message.channel.send(':red_circle: You do not have the permissions for this!')
                if(!args[2]) return message.channel.send('Please pick a user and a role to give')
                let MentionedUserMessage1 = message.mentions.members.first();
                let DeletingRole = message.guild.roles.cache.find(role => role.name == args[2]);

                MentionedUser.roles.add(DeletingRole, `Deleting roles.`)
                message.channel.send(`Removed ${MentionedUserMessage1}'s role of: **${DeletingRole}**`)
                break;
            case 'verify':
                let VerifyingUser = message.member
                let VerifedRole = message.guild.roles.cache.find(role => role.name == 'myInfo_Verifed');
                VerifyingUser.roles.add()
                message.reply('You are now verifed! Welcome aboard!')
            break;
    }
})
bot.login(token);
