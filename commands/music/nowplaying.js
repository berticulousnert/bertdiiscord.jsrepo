module.exports = {
name: "nowplaying",
aliases: "np",
code: `$author[1;Now playing;https://cdn.discordapp.com/emojis/729630163750354955.gif?size=1024]
$title[1;$lavalinkExecute[songinfo;title]]
$description[$1;addField[Duration;$lavalinkExecute[songinfo;duration]]
$addField[1;URL;$lavalinkExecute[songinfo;url]]]
$footer[$1;botPingms to load it.]
$thumbnail[1;$lavalinkExecute[songinfo;thumbnail]]
$color[1;#a09fff]
$onlyIf[$lavalinkExecute[isPaused]!=;Nothing song was playing.]
$onlyIf[$voiceID!=;You need to join the voice channel first!] $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**] $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];You need to use same voice channel as the bot!] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}