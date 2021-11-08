 module.exports = {
 name: "emoji",
 aliases: ["emogi", "em"],
 usage: "emoji (--add | --image) [emoji]",
 code: `
 $if[$checkContains[$toLowerCase[$message[1]];add;--add;-add]==true]
Emoji $addEmoji[https://cdn.discordapp.com/emojis/$replaceText[$replaceText[$checkCondition[$checkContains[$message[2];<]$checkContains[$message[2];:]$checkContains[$message[2];>]==truetruetrue]$isNumber[$message[2]];truefalse;$replaceText[$advancedTextSplit[$message[2];:;3];>;]];falsetrue;$message[2]];$message[3];yes] added with the name -> **$message[3]**
 $onlyIf[$charCount[$message[3]]>=2;⛔ **You must put a longer name over than \`2 chars\`**]
 $onlyIf[$message[3]!=;$get[Usage]]
 $onlyIf[$message[2]!=;$get[Usage]]


$elseIf[$checkContains[$toLowerCase[$message[1]];image;--image;see;--see;-see;-image]==true]
$djsEval[const emoji = require('discord.js').Util.parseEmoji("$message[2]") 

let emojis = 'https://cdn.discordapp.com/emojis/' + emoji.id + "." + (emoji.animated ? 'gif' : 'png')

message.channel.send(emojis)]
 $onlyIf[$message[2]!=;$get[Usage]]
$endElseIf
$else
 $onlyIf[$message[1]!=;$get[Usage]]
 $endif
$onlyPerms[manageemojis;**You dont have the permission to use this command**]
$onlyBotPerms[manageemojis;**I dont have the permission to use this command**`}