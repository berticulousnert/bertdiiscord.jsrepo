module.exports = {
name: "stop",
code: `$lavalinkExecute[stop]
$sendMessage[⏹️ Stopped.;no]
$onlyIf[$lavalinkExecute[isPaused]!=0;**⛔ Nothing song was playing**]
$deleteIn[5s]  $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];You need to use same voice channel as the bot!] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}