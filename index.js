const aoijs = require("aoi.js")

//online epik gamer moment
const bot = new aoijs.Bot({

  token: process.env.token
, //Discord Bot Token
  prefix: ['$getServerVar[prefix]','<@!$clientID>'],
  shardAmmount: 200,
  errorMessage: ["An Error Occurred"],
  sharding: true,
  intents: "all",
        database: {
        type:"aoi.mongo",
        db:require('aoi.mongo'),
        path: process.env.mongodb,
        tables:["mains"],
        promisify:false
    },
})

 const voice = new aoijs.Voice(bot, {
 cache: {
 cacheType: "Memory", //Disk | None
enabled: true,
 },
 });

/*const { AutoPoster } = require('topgg-autoposter')

const ap = AutoPoster(process.env.topggt, bot)

ap.on('posted', () => {
  console.log('Posted stats to Top.gg!')
})*/



//Events
bot.onInteractionCreate()
bot.onJoin()
bot.onMessage()
bot.onBanAdd
bot.onBanRemove
bot.onGuildLeave()
bot.onGuildJoin()
bot.onLeave() 
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
 url: "node2.ultimatesrv.com:25568",
 password: "youshallnotpass",
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
   msgs: "0^0^0^0^0^0^0^0^0^0",
   time: "",
   prize: "",
   channelbackupname: "",
   channelbackuptopic: "",
   channelbackuptype: "",
   channelbackupposition: "",
  categorubackupid: "",
  logchannel: "",
  banmessage: "No Reason Provided",
  kickmessage: "No Reason Provided",
  banauthor: "$clientID",
  wbid: "",
  wbtk: "",
  value: "",
  toxic: "false"
  })
  
  bot.channelCreateCommand({ //Command
channel: "$getServerVar[logchannel]", //Channel where its being logged
code: `$addTimeStamp[1] $title[1;Channel Create] $description[1; <#$newChannel[id]>\n **Options**:\n **ID: $newChannel[id]\n Name: $newChannel[name]\n Type: $newChannel[type]\n Nsfw: $newChannel[nsfw]**] $color[1;RANDOM] $onlyif[$getServerVar[logchannel]!=;] $suppressErrors[Error]`
})

bot.channelDeleteCommand({ 
channel: "$getServerVar[logchannel]", 
code: `$title[1; Channel Delete]
$description[1;**<#$oldChannel[id]>\n **Options**:\n ID: $oldChannel[id]\n Name: $oldChannel[name]\n Type: $oldChannel[type]\n Was Nsfw: $oldChannel[nsfw]**] $color[1;RANDOM] $onlyif[$getServerVar[logchannel]!=;] $suppressErrors[Error]`
})

bot.channelUpdateCommand({ 
channel: "$getServerVar[logchannel]", 
code: `
$title[1;Channel Update]
$description[1; <#$newChannel[id]>\n **Options**:\n **ID: Before: $oldChannel[id] After: $newChannel[id]\n Name: before: $oldChannel[name] After: $newChannel[name]\n Type: Before: $oldChannel[type] After: $newChannel[type]\n Nsfw: before: $oldChannel[nsfw] After: $newChannel[nsfw]\n Slowmode: $newChannel[slowmode]\n Send Message: $djsEval[guild.roles.everyone.permissionsIn(channel).toArray().includes('SEND_MESSAGES');;yes]\n Viewable: $djsEval[guild.roles.everyone.permissionsIn(channel).toArray().includes('VIEW_CHANNEL');;yes]**] $color[1;RANDOM] $onlyif[$getServerVar[logchannel]!=;] $suppressErrors[Error]
`
})

bot.leaveCommand({ 
        channel: "$getServerVar[logchannel]", 
        code: ` $sendWebhookMessage[$getServerVar[wbid];$getserverVar[wbtk];{newEmbed:{title:Member left} {description:$username Left the server}{color:RANDOM}} $onlyif[$getServerVar[logchannel]!=;] $suppressErrors[Error]`
        /*
                Code Breakdown
        $serverName - The name of the server the user left
        $username - The user who left the server
        */
})

bot.joinCommand({ 
        channel: "$getServerVar[logchannel]", 
        code: `$sendWebhookMessage[$getServerVar[wbid];$getserverVar[wbtk];{newEmbed:{title:Member Joined}{description:$username Joined the server}{color:RANDOM}} $onlyif[$getServerVar[logchannel]!=;] $suppressErrors[Error]`
})

bot.roleCreateCommand({ 
channel: "$getServerVar[logchannel]", 
code: `
$sendWebhookMessage[$getServerVar[wbid];$getserverVar[wbtk];{newEmbed:{title:Role Create}{description: <@&$newRole[id]>\n **Options**\n **Name: $newRole[name]\n Hex: $newRole[hexColor]\n Mentionable: $newRole[mentionable]\n Permissions: $newRole[permissions]**}{color:$newRole[hexColor]}} $onlyif[$getServerVar[logchannel]!=;] $suppressErrors[Error]
`
})

bot.roleDeleteCommand({ 
channel: "$getServerVar[logchannel]", 
code: `
$sendWebhookMessage[$getServerVar[wbid];$getserverVar[wbtk];{newEmbed:{title:Role Delete}{description: <@&$oldRole[id]>\n **Options**\n **Name: $oldRole[name]\n Hex: $oldRole[hexColor]\n Mentionable: $oldRole[mentionable]\n Permissions: $oldRole[permissions]**}{color:$oldRole[hexColor]}} $suppressErrors[Error]`
})

bot.roleUpdateCommand({ 
channel: "$getServerVar[logchannel]", 
code: `
$sendWebhookMessage[$getServerVar[wbid];$getserverVar[wbtk];{newEmbed:{title:Role Update}{description:**Options**\n **Name: Before: $oldRole[name] After: $newRole[name] \n Hex: Before: $oldRole[hexColor] After: $newRole[hexColor]\n Mentionable: Before: $oldRole[mentionable] After: $newRole[mentionable]\n Permissions: Before: $oldRole[permissions]\n After: $newRole[permissions]**}{color:$oldRole[hexColor]}} $onlyif[$getServerVar[logchannel]!=;] $suppressErrors[Error]
`
})

bot.banAddCommand({ 
channel: "$getServerVar[logchannel]", 
code: `
$sendWebhookMessage[$getServerVar[wbid];$getserverVar[wbtk];{newEmbed:{title:Ban}{description:Ban | Case }{field:Responsible moderator: $userTag[$getUserVar[banauthor]]}{field:Offender: $username}{field:Reason: $getUserVar[banmessage]}} $onlyif[$getServerVar[logchannel]!=;] $suppressErrors[Error]
`
})

bot.banRemoveCommand({ 
channel: "$getServerVar[logchannel]", 
code: `
$sendWebhookMessage[$getServerVar[wbid];$getserverVar[wbtk];{newEmbed:{title:Unban}{description:Unban | Case}{field:Reason Of ban: $getUserVar[banmessage]}{field:Offender: $username}{field:Responsible moderator: <@$getUserVar[banauthor]>}}
$onlyif[$getServerVar[logchannel]!=;] $suppressErrors[Error]
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
channel: "934646878438576178",
code: ` $blacklist[globalUser;$splitText[1]] 
$blacklistError[globalUser;You have been blacklisted if you think this is a problem join https://discord.gg/74FbuXsBHb] 
$textSplit[$getVar[bl]; ]
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

 bot.status({
    text: "around 70% complete",
    type: "WATCHING",
    status: "idle",
    time: 3
  })
;

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


