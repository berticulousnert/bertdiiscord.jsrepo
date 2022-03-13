module.exports = [{

name: "skip",



 code: ` 

Skipped to : \`$songInfo\`

$wait[1s]

$skip





$onlyIf[$voiceID[$authorID]==$voiceID[$clientID]; You are not in my VC.]





$onlyIf[$voiceID[$authorID]!=; Please join my VC.]



$onlyIf[$voiceID[$clientID]!=; I'm disconnected.]

$onlyif[$queueLength!=0; Nothing is playing now in this server.]



`

}]