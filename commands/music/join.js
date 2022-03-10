module.exports = [{

name: "join",

aliases: "j",

  code: `Joined <#$voiceID[$clientID]> .



$joinVC[$voiceID[$authorID]]

$onlyIf[$voiceID[$clientID]==; I'm connected somewhere else.]

$onlyIf[$voiceID[$authorID]!=; Join a VC first.]  

`

}]