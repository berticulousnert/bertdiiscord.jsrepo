const aoijs = require("aoi.js")
//online epik gamer moment
const bot = new aoijs.Bot({
  token: process.env.token
, //Discord Bot Token
  prefix: ['$getServerVar[prefix]','<@!$clientID>'],
  shardAmmount: 200,
  sharding: true,
  intents: "all",
        database: {
        type:"dbdjs.mongo",
        db:require('dbdjs.mongo'),
        path:"./database/",
        tables:["mains"],
        promisify:false
    },
})


/*const { AutoPoster } = require('topgg-autoposter')

const ap = AutoPoster(process.env.topggt, bot)

ap.on('posted', () => {
  console.log('Posted stats to Top.gg!')
})*/

const mongoose = require("mongoose")
const dbdmongo = require("dbdjs.mongo").default

mongoose.connect(process.env.mongodb, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    keepAlive: true
})

dbdmongo.createModel("main")


const express = require('express')
const app = express()
app.get('/', async (req, res) => {
  res.send('Bot is online')
})
app.listen(4000, () => console.log('Expresso!'))

//Events
bot.onInteractionCreate()
bot.onJoin()
bot.onMessage()
bot.onBanAdd
bot.onBanRemove
bot.onGuildLeave()
bot.onGuildJoin()
bot.onLeave() 
bot.onJoin() 
bot.onBanAdd() 
bot.onBanRemove() 
bot.onInviteCreate() 
bot.onInviteDelete() 
bot.onChannelCreate() 
bot.onChannelDelete() 
bot.onChannelUpdate() 
bot.onRoleCreate() 
bot.onRoleDelete() 
bot.onRoleUpdate() 

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")

const Lavalink = new aoijs.Lavalink(bot);

Lavalink.addNode({
 url: "lava.link:80",
 password: "neo",
 name: "Music",
 secure: false,
 })

//varables
bot.variables({
    prefix: ".",
    messages: "0",
    cbChannel: "",
    data: "",
    time: "",
    bl: "",
    variable: "",
    roleall: "",
   ticketid: "",
   ticketcat: "",
   ticketmessage: "",
   ticketafteropenmessage: "",
   ticketsystem1: "x",
   ticketchannelname: "", 	
   host: "",
   win: "",
   date: "",
   time: "",
   prize: "",
   channelbackupname: "",
   channelbackuptopic: "",
   channelbackuptype: "",
   channelbackupposition: "",
  categorubackupid: "",
  logchannel: "",
  banmessage: "No Reason Provided",
  kickmessage: "No Reason Provided"
  })
  
  bot.channelCreateCommand({ //Command
channel: "$getServerVar[logchannel]", //Channel where its being logged
code: `$addTimeStamp[1] $title[1;Channel Create] $description[1; <#$newChannel[id]>\n **Options**:\n **ID: $newChannel[id]\n Name: $newChannel[name]\n Type: $newChannel[type]\n Nsfw: $newChannel[nsfw]**] $color[1;RANDOM] $onlyif[$getServerVar[logchannel]!=;]`
})

bot.channelDeleteCommand({ 
channel: "$getServerVar[logchannel]", 
code: `$title[1; Channel Delete]
$description[1;**<#$oldChannel[id]>\n **Options**:\n ID: $oldChannel[id]\n Name: $oldChannel[name]\n Type: $oldChannel[type]\n Was Nsfw: $oldChannel[nsfw]**] $color[1;RANDOM] $onlyif[$getServerVar[logchannel]!=;]`
})

bot.channelUpdateCommand({ 
channel: "$getServerVar[logchannel]", 
code: `
$title[1;Channel Update]
$description[1; <#$newChannel[id]>\n **Options**:\n **ID: Before: $oldChannel[id] After: $newChannel[id]\n Name: before: $oldChannel[name] After: $newChannel[name]\n Type: Before: $oldChannel[type] After: $newChannel[type]\n Nsfw: before: $oldChannel[nsfw] After: $newChannel[nsfw]\n Slowmode: $newChannel[slowmode]\n Send Message: $djsEval[guild.roles.everyone.permissionsIn(channel).toArray().includes('SEND_MESSAGES');;yes]\n Viewable: $djsEval[guild.roles.everyone.permissionsIn(channel).toArray().includes('VIEW_CHANNEL');;yes]**] $color[1;RANDOM] $onlyif[$getServerVar[logchannel]!=;]
`
})

bot.leaveCommand({ 
        channel: "$getServerVar[logchannel]", 
        code: `$title[1;Member left] $description[1;$username Left the server] $color[1;RANDOM] $onlyif[$getServerVar[logchannel]!=;]`
        /*
                Code Breakdown
        $serverName - The name of the server the user left
        $username - The user who left the server
        */
})

bot.joinCommand({ 
        channel: "$getServerVar[logchannel]", 
        code: `$title[1;Member Joined] $description[1;$username Joined the server] $color[1;RANDOM] $onlyif[$getServerVar[logchannel]!=;]`
})

bot.roleCreateCommand({ 
channel: "$getServerVar[logchannel]", 
code: `
$title[1;Role Create] $description[1; <@&$newRole[id]>\n **Options**\n **Name: $newRole[name]\n Hex: $newRole[hexColor]\n Mentionable: $newRole[mentionable]\n Permissions: $newRole[permissions]**] $color[1;$newRole[hexColor]] $onlyif[$getServerVar[logchannel]!=;]
`
})

bot.roleDeleteCommand({ 
channel: "$getServerVar[logchannel]", 
code: `
$title[1;Role Delete] $description[1; <@&$oldRole[id]>\n **Options**\n **Name: $oldRole[name]\n Hex: $oldRole[hexColor]\n Mentionable: $oldRole[mentionable]\n Permissions: $oldRole[permissions]**] $color[1;$oldRole[hexColor]]`
})

bot.roleUpdateCommand({ 
channel: "$getServerVar[logchannel]", 
code: `
$title[1;Role Update] $description[1;**Options**\n **Name: Before: $oldRole[name] After: $newRole[name] \n Hex: Before: $oldRole[hexColor] After: $newRole[hexColor]\n Mentionable: Before: $oldRole[mentionable] After: $newRole[mentionable]\n Permissions: Before: $oldRole[permissions]\n After: $newRole[permissions]**] $color[1;$oldRole[hexColor]] $onlyif[$getServerVar[logchannel]!=;]
`
})

bot.banAddCommand({ 
channel: "$getServerVar[logchannel]", //Add getServerVar to get the servers log channel (if they set it ofcourse)
code: `
$title[1;Ban] $description[1;Responsible moderator: $userTag[$authorid]\n Offender: $username\n Reason: $getServerVar[banmessage]] $onlyif[$getServerVar[logchannel]!=;]
`
})

bot.banRemoveCommand({ 
channel: "$getServerVar[logchannel]", //Add getServerVar to get the servers log channel (if they set it ofcourse)
code: `
$title[1;Ban] $description[1;Responsible moderator: $userTag[$authorid]\n Offender: $username\n Reason Of ban: $getServerVar[banmessage]] $onlyif[$getServerVar[logchannel]!=;]
`
})






bot.functionManager.createCustomFunction({
name: "$transcript",
type: "djs",
code: async d => {
 const data = d.util.openFunc(d)
 

const discordTranscripts = require('discord-html-transcripts');

const channel = d.message.channel; // or however you get your TextChannel

// Must be awaited
const attachment = await discordTranscripts.createTranscript(d.message.channel);

channel.send({
 files: [attachment]
});  
return {
code: d.util.setCode(data)
}
}
}) 

    bot.readyCommand({
    channel: "",
    code: `$blacklist[globalUser;$joinTextSplit[;]]
$blacklistError[globalUser;Imagine trying to use bert command]

$textSplit[$getVar[bl];/]
 `
})



bot.status({
    text: "$allMembersCount members",
    type: "WATCHING",
    status: "idle",
    time: 3
  })

  bot.status({
    text: "$serverCount guilds",
    type: "WATCHING",
    status: "idle",
    time: 3
  })

  bot.status({
    text: "Prefix: .",
    type: "WATCHING",
    status: "idle",
    time: 3
  })


  bot.command({
    name: "backup",
    code: `$forEachGuildChannel[1;{};backup;] $onlyif[$authorID==$botownerID;Owner only for now]`
})

bot.awaitedCommand({
name: "backup",
code: `Backup has been set $setServerVar[channelbackupname;$channel[$channellID;name]] $setServerVar[channelbackuptopic;$channel[$channellID;topic]] $setServerVar[channelbackupposition;$channel[$channellID;position]] $setServerVar[channelbackuptype;$channel[$channelIID;type]] $setServerVar[categorubackupid;$channelCategoryID[$channellID]]`
});


//$channelCategoryID[channel ID (Optional)]

bot.awaitedCommand({
name: "backup-restore",
code: `Set tight while i fix the server for someone lazy $djsEval[channel.delete()]`
});

//$djsEval[message.channel.delete()]

  bot.command({
    name: "backup-restore",
    code: `Set tight while i fix the server for someone lazy $onlyif[$authorID==$botownerID;Owner only for now] $forEachGuildChannel[1;{};backup-restore;]`
  });

  //$forEachGuildChannel[1;{};backup-restore] 

bot.command({
name: "quote",
code: ` $author[1;$userTag[$getMessage[$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[6]];false;$mentionedChannels[1;yes]];$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[7]];false;$noMentionMessage];userID]];$userAvatar[$getMessage[$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[6]];false;$mentionedChannels[1;yes]];$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[7]];false;$noMentionMessage];userID]]]
$description[1;$getMessage[$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[6]];false;$mentionedChannels[1;yes]];$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[7]];false;$noMentionMessage];content]
 
[Jump to message\\]($replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$message];false;https://discord.com/channels/$guildID/$mentionedChannels[1;yes]/$noMentionMessage])
$textSplit[$message;/]
$color[1;RANDOM]
$suppressErrors[**⛔ Could not find message**]`
})

bot.command({
  name: "support",
  code: `$author[1;Why not join?] $description[1;[Support server](https://discord.gg/74FbuXsBHb 'join noob') go brrr] 
  $color[1;RANDOM]
  $footer[1;Support server| https://discord.gg/74FbuXsBHb]`
})



bot.command({
 name: "roleall",
 code: `$ForEachMember[1;{};roleall]
$onlyPerms[admin;You must have admin perms to use this command]
$setServerVar[roleall;$findRole[$message[1]]]
$argsCheck[1;What should i role?] `
})

bot.awaitedCommand({
 name: "roleall",
 code: `$giveRoles[$guildid;$guildID;$getServerVar[roleall]] $onlyBotPerms[admin;Bozo i don't have manage roles perms.] All memebers has been rick rolled Oops i ment roled `
})

//`All memebers has been rick rolled Oops i ment roled  $giveRoles[$guildid;$authorID;$getServerVar[roleall]] $onlyBotPerms[admin;Bozo i don't have manage roles perms.]

