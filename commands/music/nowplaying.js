module.exports = {
name: "nowplaying",
aliases: "np",
code: `$author[Now playing;https://cdn.discordapp.com/emojis/729630163750354955.gif?size=1024]
$title[$lavalinkExecute[songinfo;title]]
$description[$addField[Duration;$lavalinkExecute[songinfo;duration]]
$addField[URL;$lavalinkExecute[songinfo;url]]]
$footer[$botPingms to load it.]
$thumbnail[$lavalinkExecute[songinfo;thumbnail]]
$color[a09fff]
$onlyIf[$lavalinkExecute[isPaused]!=;Nothing song was playing.]
$onlyIf[$voiceID!=;You need to join the voice channel first!] $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**] $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];You need to use same voice channel as the bot!] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}