module.exports = {
 name: "embed",
code: `$title[1;$splitText[1]]
 $description[1;$spliTtext[2]]
 $footer[1;$splitText[3]]
 $color[1;RANDOM]
 $textsplit[$message;|]
$cooldown[4s;Wait for 4 seconds, you can't just spam the bot command!]
$argsCheck[1;{newEmbed: {title:Error!}{description:**Hello! I guess that you made the format of the embed wrongfully, make sure to make it like this way!**}{color:D6FFD2}{image:https://media.discordapp.net/attachments/874564662975430696/886626715709886504/unknown.png}}]`
}