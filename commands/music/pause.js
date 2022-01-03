module.exports = {
name: "pause",
code: `$suppressErrors[Connection Error] $lavalinkExecute[pause]
**⏸️ Paused**
$onlyIf[$lavalinkExecute[isPaused]!=;Nothing song was playing.]
$onlyIf[$voiceID!=;You need to join the voice channel first!] $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];You need to use same voice channel as the bot!] `
}