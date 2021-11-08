const aoijs = require("aoi.js")
//online epik gamer moment
const bot = new aoijs.Bot({
  token: process.env[
    "token"]
, //Discord Bot Token
  prefix: ['$getServerVar[prefix]', '<@!$clientID>', '<@$clientID>', '.'], 
  intents: all
})

//Events
bot.onMessage()
bot.onInteractionCreate()
bot.onMessageDelete()
bot.onJoin()
bot.loadCommands(__dirname + '/commands')
bot.loadCommands(__dirname + '/custom')
bot.onBanAdd
bot.onBanRemove
bot.onGuildLeave()
bot.onGuildJoin()

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
    dbping: "0"
    })

//Command Example
bot.command({
name: "ping",
code: `Pong! \`$ping\`ms`
})

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

bot.status({
    text: "Bert v2 coming soon",
    type: "WATCHING",
    status: "idle",
    time: 12
  })


  bot.command({
    name: "$getServerVar[cmdprefix]",
    nonprefixed: true,
    code: `$getServerVar[cmdmessage]`
  })


  bot.command({
    name: "setcmdp",
  code: `$setServerVar[cmdprefix;$message]`
  })


bot.command({
  name: "setcmdm",
  code: `$setServerVar[cmdmessage;$message]`
})

    


bot.command({
  name:"gstart",
  code:`$editmessage[$get[e];{author:🎉 GIVEAWAY (ENDED) 🎉:}{thumbnail:$servericon}{title:$get[prize]}{description:*Hosted By#COLON#* <@$authorid>\n*Winner:* <@$get[winner]>\n*Ended* <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n*$get[participated]* Users had joined this giveaway}{footer:Ended at:}{timestamp:$get[endstamp]}{color:BLUE}]
  $sendmessage[Congratulations <@$get[winner]>! You won *$get[prize]*;no]
  $onlyif[$getmessagevar[ended]==false;]
  $onlyif[$get[winner]!=;No winner decided due to lack of participation]
  $setmessagevar[ended;true;$get[e]]
  $let[winner;$randomtext[$joinsplittext[;]]]
  $removetextsplitelement[$gettextsplitlength]
  $textsplit[$getmessagevar[joinedusers;$get[e]];@]
  $let[participated;$getmessagevar[joined;$get[e]]]
  $wait[$get[time]]
  $setmessagevar[endstamp;$get[endstamp];$get[e]]
  $setmessagevar[hoster;$authorid;$get[e]]
  $setmessagevar[prize;$get[prize];$get[e]]
  $let[e;$apimessage[$channelid;;{author:🎉 GIVEAWAY 🎉:}{thumbnail:$servericon}{title:$get[prize]}{description:*Hosted By#COLON#* <@$authorid>\n*Nº Winners:* 1\n*Ends* <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n*No one* has joined this giveaway}{footer:Ends at:}{timestamp:$get[endstamp]}{color:BLUE};{actionRow:🎊 Join 🎊,2,3,join:🔁 Reroll 🔁,2,1,reroll:🔚 End 🔚,2,4,end};;yes]]
  $let[endstamp;$sum[$datestamp;$ms[$get[time]]]]
  $let[prize;$messageslice[1]]
  $onlyif[$ms[$get[time]]!=undefined;Invalid time provided]
  $let[time;$message[1]]
  $onlyif[$message[2]!=;Enter a time and a prize]`})
  bot.interactionCommand({
  name:"join",
  prototype:"button",
  code:`$editmessage[$get[msg];{author:🎉 GIVEAWAY 🎉:}{thumbnail:$servericon}{title:$get[prize]}{description:*Hosted By#COLON#* <@$get[host]>\n*Nº Winners:* 1\n*Ends* <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n*$get[participated]* Users have participated in this giveaway.}{footer:Ends at:}{timestamp:$get[endstamp]}{color:BLUE}]
  $setmessagevar[joinedusers;$getmessagevar[joinedusers;$get[msg]]$authorid@;$get[msg]]
  $setmessagevar[joined;$get[participated];$get[msg]]
  $onlyif[$get[condition]==false;]
  $interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];false;Joined the giveaway];true;You have already joined the giveaway];ended;The giveaway ended];;;64]
  $let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];true;ended];false;$get[condition]]]
  $let[condition;$checkcontains[$getmessagevar[joinedusers;$interactiondata[message.id]];$authorid]]
  $let[participated;$sum[$getmessagevar[joined;$get[msg]];1];$get[msg]]
  $let[host;$getmessagevar[hoster;$get[msg]]]
  $let[endstamp;$getmessagevar[endstamp;$get[msg]]]
  $let[prize;$getmessagevar[prize;$get[msg]]]
  $let[msg;$interactiondata[message.id]]`})
  bot.interactionCommand({
  name:"reroll",
  prototype:"button",
  code:`$editmessage[$get[e];{author:🎉 GIVEAWAY (REROLLED) 🎉:}{thumbnail:$servericon}{title:$get[prize]}{description:*Hosted By#COLON#* <@$authorid>\n*Winner After Reroll:* <@$get[winner]>\n*Ended* <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n*$get[participated]* Users had joined this giveaway}{footer:Ended at:}{timestamp:$get[endstamp]}{color:BLUE}]
  $sendmessage[Congratulations <@$get[winner]>! You won the reroll of *$get[prize]*;no]
  $onlyif[$get[winner]!=;No winner decided due to lack of participation]
  $setmessagevar[ended;true;$get[e]]
  $let[winner;$randomtext[$joinsplittext[;]]]
  $removetextsplitelement[$gettextsplitlength]
  $textsplit[$getmessagevar[joinedusers;$get[e]];@]
  $let[participated;$getmessagevar[joined;$get[e]]]
  $let[e;$get[msg]]
  $onlyif[$get[condition]==perform;]
  $interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];perform;Rerolled the giveaway];true;This giveaway has not ended yet];false;You do not have enough perms];;;64]
  $let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];true;$replacetext[$replacetext[$get[condition];true;perform];false;false]];false;$get[condition]]]
  $let[condition;$hasperms[$authorid;manageserver]]
  $let[host;$getmessagevar[hoster;$get[msg]]]
  $let[endstamp;$getmessagevar[endstamp;$get[msg]]]
  $let[prize;$getmessagevar[prize;$get[msg]]]
  $let[msg;$interactiondata[message.id]]`})
  bot.interactionCommand({
  name:"end",
  prototype:"button",
  code:`$editmessage[$get[e];{author:🎉 GIVEAWAY (FORCE ENDED) 🎉:}{thumbnail:$servericon}{title:$get[prize]}{description:*Hosted By#COLON#* <@$authorid>\n*Winner After Force End:* <@$get[winner]>\n*Ended* <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n*$get[participated]* Users had joined this giveaway}{footer:Ended at:}{timestamp:$get[endstamp]}{color:BLUE}]
  $sendmessage[Congratulations <@$get[winner]>! You won the giveaway(force ended) of *$get[prize]*;no]
  $onlyif[$get[winner]!=;No winner decided due to lack of participation]
  $setmessagevar[ended;true;$get[e]]
  $let[winner;$randomtext[$joinsplittext[;]]]
  $removetextsplitelement[$gettextsplitlength]
  $textsplit[$getmessagevar[joinedusers;$get[e]];@]
  $let[participated;$getmessagevar[joined;$get[e]]]
  $let[e;$get[msg]]
  $onlyif[$get[condition]==perform;]
  $interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];perform;Ended the giveaway];true;This giveaway has already ended];false;You do not have enough perms];;;64]
  $let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];false;$replacetext[$replacetext[$get[condition];true;perform];false;false]];true;$get[condition]]]
  $let[condition;$hasperms[$authorid;manageserver]]
  $let[host;$getmessagevar[hoster;$get[msg]]]
  $let[endstamp;$getmessagevar[endstamp;$get[msg]]]
  $let[prize;$getmessagevar[prize;$get[msg]]]
  $let[msg;$interactiondata[message.id]]`})









bot.updateCommand({
 channel: "$channelID",
 code: `$setChannelVar[msgEditorID;$authorID]
 $setChannelVar[esnipeOldMsg;$oldMessage]`
})
bot.onMessageUpdate();
 
bot.command({
 name: "editsnipe",
 aliases: ["esnipe"],
 code: `$author[$username[$getChannelVar[msgEditorID]]#$discriminator[$getChannelVar[msgEditorID]];$userAvatar[$getChannelVar[msgEditorID]]]
$description[$getChannelVar[esnipeOldMsg]]
$addTimestamp
$color[RANDOM]
$onlyIf[$getChannelVar[esnipeOldMsg]!=undefinied;{description: there is nothing to snipe}{color: RED}]
$onlyIf[$getChannelVar[msgEditorID]!=undefinied;{description: there is nothing to snipe}{color: RED}]
$suppressErrors[There is nothing to snipe]`
})



bot.command({
name: "quote",
code: ` $author[$userTag[$getMessage[$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[6]];false;$mentionedChannels[1;yes]];$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[7]];false;$noMentionMessage];userID]];$userAvatar[$getMessage[$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[6]];false;$mentionedChannels[1;yes]];$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[7]];false;$noMentionMessage];userID]]]
$description[$getMessage[$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[6]];false;$mentionedChannels[1;yes]];$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[7]];false;$noMentionMessage];content]
 
[Jump to message\\]($replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$message];false;https://discord.com/channels/$guildID/$mentionedChannels[1;yes]/$noMentionMessage])
$textSplit[$message;/]
$color[RANDOM]
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
  $color[RANDOM]
  $channelSendMessage[$getServerVar[modlogs];<@$authorID> - Mod Logs Channel was removed by $username #$discriminator[$authorID].]
  $suppressErrors
 
  $else
  $if[$channelExists[$findServerChannel[$message]]==true]
  $setServerVar[modlogs;$findServerChannel[$message]]
  $description[<#$findServerChannel[$message]> set as Mod Logs Channel from <#$channelCategoryID[$findServerChannel[$messag]]> Category.]
  $color[RANDOM]
  
  $endif
  $endif
  
  $argsCheck[>1;{title:Missing Arguments}{description:$getServerVar[prefix]s-modlogs <#channel/ID/remove>}{color:RED}]
  $onlyPerms[manageserver;{title:Missing Permissions}{description:Missing Manage Server permission}{color:RED}]`

})





bot.botJoinCommand({
  channel: "884959027962982465",
  code: `
Ive joined $serverName!
`
})

bot.botLeaveCommand({
  channel: "884959027962982466",
  code: `
I have left $serverName!
`
})








bot.command({
  name: "blacklist",
  code: `$setGlobalUserVar[Blacklist;true;$mentioned[1]]
**$username[$mentioned[1]]#$discriminator[$mentioned[1]] you are blacklisted now**
$onlyIf[$mentioned[1]!=;You must mention someone]
$onlyIf[$mentioned[1]!=$authorID;**⛔ You can't blacklist yourself**]
$onlyForIDs[746758742871244811;769252161493663755;**⛔ Only the owner can use this command**]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
})


bot.command({
  name: "whitelist",
  code: `$setGlobalUserVar[Blacklist;false;$mentioned[1]]
**$username[$mentioned[1]]#$discriminator[$mentioned[1]] ✅ You are no longer on the blacklist**
$onlyIf[$mentioned[1]!=;You must mention someone]
$onlyIf[$mentioned[1]!=$authorID;**⛔ You can't blacklist yourself, so you can't unblacklist yourself**]
$onlyForIDs[746758742871244811;769252161493663755;**⛔ You are not the owner**]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
})





bot.timeoutCommand({
  code: `
 $sendDM[$timeoutData[userID];]
 $setUserVar[premium;false;$timeoutData[userID]]`
})





bot.command({
  name: "nuke",
  code: `
$loop[1;sendMessage]
$deleteChannels[$channelID]
$cloneChannel[$channelID]
$onlyPerms[admin;{title:Missing Permissions}{color:RANDOM}{description:You don't have \`Admin\` permissions to use this command}]
 `
})

bot.awaitedCommand({
  name: "sendMessage",
  code: `
$wait[1s]
$channelSendMessage[$channelID[$channelName];{description: **This Channel Has Been Nuke By** <@$authorID> $customEmoji[yes]}{image:https://media1.tenor.com/images/2e50750a1356ee2cf828090cbb864634/tenor.gif?itemid=4464831}{color:RANDOM}]

`
})

bot.onChannelDelete()
bot.channelDeleteCommand({
 channel: "$getVar[modlogs]",
 code: `

$sendMessage[{title:RAID BOT DETECT!} {description:$usertag[$getauditlogs[1;everyone;CHANNEL_DELETE;$guildid;{executor.id}]] has been banned because deleted 2 channel in less than 3 second };no]

$ban[$getauditlogs[1;everyone;CHANNEL_DELETE;$guildid;{executor.id}];raid bot]


$onlyIf[$getUserVar[c;$getauditlogs[1;everyone;CHANNEL_DELETE;$guildid;{executor.id}]]>=2;]


$setUserVar[c;$math[$getUserVar[c;$getauditlogs[1;everyone;CHANNEL_DELETE;$guildid;{executor.id}]]+1];$getauditlogs[1;everyone;CHANNEL_DELETE;$guildid;{executor.id}]]


$onlyIf[$isbot[$getauditlogs[1;everyone;CHANNEL_DELETE;$guildid;{executor.id}]]!=false;]
$getauditlogs[1;everyone;CHANNEL_DELETE;$guildid;{executor.id}] $suppressErrors
`
 })

bot.loopCommand({
code: ``,
 channel: "$getVar[modlogs]",
 every: 300,
 executeOnStartup: true})



bot.onChannelDelete()
bot.channelDeleteCommand({
 channel: "$getVar[modlogs]",
 code: `

$sendMessage[{title:RAID BOT DETECT!} {description:$usertag[$getauditlogs[1;everyone;CHANNEL_CREATE;$guildid;{executor.id}]] has been banned because deleted 2 channel in less than 3 second };no]

$ban[$getauditlogs[1;everyone;CHANNEL_CREATE;$guildid;{executor.id}];raid bot]


$onlyIf[$getUserVar[c;$getauditlogs[1;everyone;CHANNEL_CREATE;$guildid;{executor.id}]]>=2;]


$setUserVar[c;$math[$getUserVar[c;$getauditlogs[1;everyone;CHANNEL_CREATE;$guildid;{executor.id}]]+1];$getauditlogs[1;everyone;CHANNEL_DELETE;$guildid;{executor.id}]]


$onlyIf[$isbot[$getauditlogs[1;everyone;CHANNEL_CREATE;$guildid;{executor.id}]]!=false;]
$getauditlogs[1;everyone;CHANNEL_CREATE;$guildid;{executor.id}] $suppressErrors
`
 })

bot.loopCommand({
code: ``,
 channel: "$getServerVar[modlogs]",
 every: 300,
 executeOnStartup: true})

module.exports.bot = bot