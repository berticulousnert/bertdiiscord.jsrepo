module.exports = {
name: "loop",
code: `$suppressErrors[Connection Error] Loop is set to $lavalinkExecute[loopmode;$message[1]]
$argsCheck[1;Please specify the type of loop. here they are: none,queue,track]
$onlyIf[$lavalinkExecute[isPaused]!=0;Nothing song was playing.]
$onlyIf[$voiceID!=;You need to join the voice channel first!] $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];You need to use same voice channel as the bot!]`
}