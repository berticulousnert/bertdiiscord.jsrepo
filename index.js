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
    roleall: ""
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

