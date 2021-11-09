const aoijs = require("aoi.js")
//online epik gamer moment
const bot = new aoijs.Bot({
  token: process.env[
    "token"]
, //Discord Bot Token
  prefix: ['$getServerVar[prefix]', '<@!$clientID>', '<@$clientID>', '.'], 
  intents: "all"
})

//Events
bot.onInteractionCreate()
bot.onMessage()
bot.onMessageDelete()
bot.onJoin()
// bot.LoadCommands.load(__dirname,'./commands',)
// bot.LoadCommands.load(__dirname,'./custom',)
bot.onBanAdd
bot.onBanRemove
bot.onGuildLeave()
bot.onGuildJoin()
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")


//varables
bot.variables({
    prefix: ".",
    setwelcome: "",
    setj: "",
    jt: "",
    jd: "",
    jf: "",
    messages: '0',
    Blacklist: "false",
    jc: "",
    banned: "",
    chatbotchannel: "",
    textwelcomemessage: "",
    premium: "false",
    levelling: "false",
    level_msg: "{user.mention}, you just levelled up to {level}!",
    level_channel: "",
    level_roles: "",
    level_order: "",
    exp: "0",
    level_card: "https://wallpapercave.com/wp/wp2704825.jpg",
    level_msges: "",
    level_morder: "",
    req: "100",
    rank: "0",
    msg: "",
    antiraid: "",
    antiraidlog: "",
    suggest_channel: "",
    suggest_count: "0",
    suggest_where: "",
    su: "",
    channel_snipe: "",
    author_snipe: "",
    message_snipe: "",
    icon_snipe: "",
    snipeperms: "",
    command: "",
    mid: "",
    modlogs: "",
    afk: "n",
    afkwhy: "",
    command: "enabled",
    afkts: '',
    botjoing: "",
    botleaveg: "",
    autorolej: "",
    embedColor: "#000000",
    snipe_msg: "",
   snipe_author: "",
   snipe_channel: "",
   snipe_date: "",
   msgEditorID: "undefined",
   esnipeOldMsg: "undefined"
  })
  
  bot.variables({
    data: "",
    time: "",
    question1: "",
    question2: "",
  question3: "",
  question4: "",
  question5: "",
  question6: "",
  question7: "",
  question8: "",
  question9: "",
  question10: "",
  questionlogchannel: "",
  questionmessage: "",
  setqtitle: "",
  setqdescription1: "",
  setqdescription2: "",
  setqdescription3: "",
  setqdescription4: "",
  setqdescription5: "",
  setqdescription6: "",
  setqdescription7: "",
  setqdescription8: "",
  setqdescription9: "",
  setqdescription10: "",
  setqfooter: "",
  setqcolor: "",
  password: "",
  userpw: "",
  cmdprefix: "",
  cmdmessage: ""
  })
  
  bot.variables({
    endstamp:"0",
    hoster:"",
    prize:"",
    joined:"0",
    joinedusers:"",
    ended:"false",
    antilink: "false",
    cbw: "",
    badwords: "false",
    bl:"",
    muted: "",
    bping: "0",
    wsping: "0",
    dbping: "0",
    c: "0"
    })


//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

bot.status({
    text: "Bert optimied",
    type: "WATCHING",
    status: "idle",
    time: 12
  })

  bot.status({
    text: "my people",
    type: "WATCHING",
    status: "idle",
    time: 12
  })

  bot.status({
    text: "https://www.bert-bot.tk/#",
    type: "WATCHING",
    status: "idle",
    time: 12
  })






bot.updateCommand({
 channel: "$channelID",
 code: `$setChannelVar[msgEditorID;$authorID]
 $setChannelVar[esnipeOldMsg;$djseval[d.data.oldm.content;yes]]`
})
bot.onMessageUpdate();
 
bot.command({
 name: "editsnipe",
 aliases: ["esnipe"],
 code: `$author[1;$username[$getChannelVar[msgEditorID]]#$discriminator[$getChannelVar[msgEditorID]];$userAvatar[$getChannelVar[msgEditorID]]]
$description[1;$getChannelVar[esnipeOldMsg]]
$addTimestamp
$color[1;RANDOM]
$onlyIf[$getChannelVar[esnipeOldMsg]!=undefinied;{description: there is nothing to snipe}{color: RED}]
$onlyIf[$getChannelVar[msgEditorID]!=undefinied;{description: there is nothing to snipe}{color: RED}]
$suppressErrors[There is nothing to snipe]`
})



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
  name: "timer",
  code: `$loop[1;count]
 $setUserVar[data;$get[messageID],$channelID]
 $djsEval[
 const parse = require('parse-duration')
 let secs = parse(d.args[0], 's')
 d.client.db.set("main", 'time_' + d.message.guild.id + '_' + d.message.author.id, secs)
 ]
 $let[messageID;$channelSendMessage[$channelID;$message[1];yes]]
 $argsCheck[1;How we gonna count down if i didnt get any number...]
 $onlyForIDs[746758742871244811;426162686791778304;]`
 })
 
 bot.awaitedCommand({
  name: "count",
  code: `$if[$getUserVar[time]!=0]
 $loop[1;count]
 $editMessage[$advancedTextSplit[$getUserVar[data];,1];$getUserVar[time];$advancedTextSplit[$getUserVar[data];,;2]]
 $addMessageReactions[$channelID;$advancedTextSplit[$getUserVar[data];,1];😂]
 $setUserVar[time;$sub[$getUserVar[time];1]]
 $else
 $editMessage[$advancedTextSplit[$getUserVar[data];,1]; $getReactions[$channelID;$advancedTextSplit[$getUserVar[data];,1];😂;mention] Timer Ended;$advancedTextSplit[$getUserVar[data];,;2]] $suppressErrors[Please only say a number]
 $endif
 $wait[1s]
 `
 })





bot.command({
  name: "setup-modlogs",
  aliases: ["sml"],
  code: `
  
  $if[$message[1]==remove]
  $setServerVar[modlogs;0]
  $color[1;RANDOM]
  $channelSendMessage[$getServerVar[modlogs];<@$authorID> - Mod Logs Channel was removed by $username #$discriminator[$authorID].]
  $suppressErrors
 
  $else
  $if[$channelExists[$findServerChannel[$message]]==true]
  $setServerVar[modlogs;$findServerChannel[$message]]
  $description[1;<#$findServerChannel[$message]> set as Mod Logs Channel from <#$channelCategoryID[$findServerChannel[$messag]]> Category.]
  $color[1;RANDOM]
  
  $endif
  $endif
  
  $argsCheck[>1;{newEmbed: {title:Missing Arguments}{description:$getServerVar[prefix]s-modlogs <#channel/ID/remove>}{color:RED}}]
  $onlyPerms[manageserver;{newEmbed: {title:Missing Permissions}{description:Missing Manage Server permission}{color:RED}}]`

})





bot.onGuildJoin({
  channel: "884959027962982465",
  code: `
Ive joined $serverName!
`
})

bot.onGuildLeave({
  channel: "884959027962982466",
  code: `
I have left $serverName!
`
})
