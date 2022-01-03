module.exports = {
name: "skip",
code: `$lavalinkExecute[skip]
⏩ Skipped!
$onlyif[$authorID==$botOwnerID;Command disabled until further noticed.]
$onlyIf[$lavalinkExecute[isPaused]!=0;**⛔ Nothing song was playing**]
$onlyIf[$voiceID!=;**⛔ You need to join the voice channel first**] $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];You need to use same voice channel as the bot!] `
}