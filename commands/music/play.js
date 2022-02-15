module.exports = [{
name: "play",
 code: `
\`$playTrack[youtube;$message]\`

$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];\`❌ You are connected somewhere else.\`]

$onlyIf[$voiceID[$authorID]!=;\`❌ Please join a VC. \`]

$onlyIf[$voiceID[$clientID]!=;\`❌ Please use the "join" command first.\`]

$onlyForIDs[$botOwnerID;]`
}]