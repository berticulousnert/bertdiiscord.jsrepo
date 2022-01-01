const aoijs = require("aoi.js")
//online epik gamer moment
const bot = new aoijs.Bot({
  token: process.env[
    "token"]
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
 url: "localhost:3535",
 password: "someStongPasswordHere",
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
    variable: ""
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
    time: 12
  })

  bot.status({
    text: "$serverCount guilds",
    type: "WATCHING",
    status: "idle",
    time: 12
  })

  bot.status({
    text: "Prefix: .",
    type: "WATCHING",
    status: "idle",
    time: 12
  })

bot.command({
name: "cache",
code: "$forEachGuild[1;{};cache]"
})

bot.awaitedCommand({
name: "cache",
code: `$cacheMembers[$guildID] $log[Cached $serverNames]` //Every servers value for 'hello' will be 'bye'
})


bot.command({
 name: "play",
 code: `
 Added $lavalinkExecute[songinfo;title] to queue
 $let[a;$lavalinkExecute[$replaceText[$replaceText[$lavalinkExecute[isIdling];true;play];false;volume]]]
 $log[$lavalinkExecute[isIdling]|$lavalinkExecute[isPlaying]|$lavalinkExecute[isPaused]]
 $let[a;$lavalinkExecute[addtrack;$get[key];1]]
 $let[key;$lavalinkExecute[search;$message]]
 $lavalinkExecute[connect]
 `
});


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


