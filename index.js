const aoijs = require("aoi.js")
//online epik gamer moment
const bot = new aoijs.Bot({
  token: process.env[
    "token"]
, //Discord Bot Token
  prefix: '$getServerVar[prefix]', 
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

const { AutoPoster } = require('topgg-autoposter')

const ap = AutoPoster(process.env.topggt, bot)

ap.on('posted', () => {
  console.log('Posted stats to Top.gg!')
})

const mongoose = require("mongoose")
const dbdmongo = require("dbdjs.mongo").default

mongoose.connect("mongodb+srv://bert3:bert@cluster0.benpr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true
})

dbdmongo.createModel("main")


const express = require('express')
const app = express()
app.get('/', async (req, res) => {
  res.send('Up and running')
})
app.listen(3000, () => console.log('Expresso!'))

//Events
bot.onInteractionCreate()
bot.onJoin()
bot.onMessage()
bot.onBanAdd
bot.onBanRemove
bot.onGuildLeave()
bot.onGuildJoin()
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")

const Lavalink = new aoijs.Lavalink(bot);

Lavalink.addNode({
 url: "lavalink-repl.supremesupreme2.repl.co",
 password: "berticulous",
 name: "my-lavalink",
 secure: false,
 })

//varables
bot.variables({
    prefix: ".",
    setwelcome: "",
    setj: "",
    jt: "",
    jd: "",
    jf: "",
    messages: '0',
    jc: "",
    banned: "",
    cbChannel: "",
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
    chatbotchannel: "",
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
    c: "0",
    levelling: "",
    bl: "",
    mongo: ""
    })

    bot.readyCommand({
    channel: "",
    code: `$blacklist[globalUser;$joinTextSplit[;]]
$blacklistError[globalUser;Imagine trying to use bert command]

$textSplit[$getVar[bl];/]`
})


bot.status({
    text: "$allMembersCount members",
    type: "WATCHING",
    status: "idle",
    time: 5
  })

  bot.status({
    text: "$serverCount guilds",
    type: "WATCHING",
    status: "idle",
    time: 5
  })

  bot.status({
    text: "https://www.bert-bot.tk/#",
    type: "WATCHING",
    status: "idle",
    time: 5
  })

  bot.status({
    text: "Prefix: .",
    type: "WATCHING",
    status: "idle",
    time: 5
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
$argsCheck[1;***ADD AN ARG!!!***]`
})

bot.awaitedCommand({
 name: "count",
 code: `$if[$getUserVar[time]!=0]
$loop[1;count]
$editMessage[$advancedTextSplit[$getUserVar[data];,1];$getUserVar[time];$advancedTextSplit[$getUserVar[data];,;2]]
$setUserVar[time;$sub[$getUserVar[time];1]]
$else
$editMessage[$advancedTextSplit[$getUserVar[data];,1];<@$authorID> Timer Ended;$advancedTextSplit[$getUserVar[data];,;2]] $suppressErrors[Please only say a number]
$endif
$wait[1s]
`
})

bot.command({
  name: "support",
  code: `$author[1;Why not join?] $description[1;[Support server](https://discord.gg/74FbuXsBHb 'join noob') go brrr] 
  $color[RANDOM]
  $footer[1;Support server| https://discord.gg/74FbuXsBHb]`
})

//hi jalan wat yah doing?
