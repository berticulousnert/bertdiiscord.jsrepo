module.exports = [{

name: "play",

  aliases: "p",

 code: `

 $title[1;Now Playing]

$thumbnail[1;$songInfo[thumbnail]]

$description[1;

**Playing :**

[$songInfo]($songInfo[url])

**Song By : **

\`$songInfo[author]\`

** Duration :**

\`$humanizeMS[$songInfo[duration]]\`

]

$color[1;#000001]

$wait[1s]

YouTube : \`$playTrack[youtube;$message]\`



$onlyIf[$voiceID[$authorID]==$voiceID[$clientID]; You are connected somewhere else.]

$onlyIf[$voiceID[$clientID]!=; Please use the "join" command first.]


$onlyIf[$voiceID[$authorID]!=; Please join a VC.]

`

}]