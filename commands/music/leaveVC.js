module.exports = [{
name: "leave",
aliases: "dc",
 code: `
$leaveVC

$onlyIf[$voiceID[$clientID]!=;\`❌ I'm already disconnected.\`]
$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];\`❌ You are not in my VC.\`]
$onlyIf[$voiceID[$authorID]!=;\`❌ Please join my VC \`]
$onlyForIDs[$botOwnerID;]`
}]
