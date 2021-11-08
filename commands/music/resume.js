	module.exports = {
name: "resume",
code: `$lavalinkExecute[resume]
**▶️ Resumed**
$onlyIf[$lavalinkExecute[isPaused]!=0;Nothing song was playing.]
$onlyIf[$voiceID!=;You need to join the voice channel first!] $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}