module.exports = [{
name: "join",
 code: `
Joined <#$voiceID[$authorID]>.
$joinVC[$voiceID[$authorID]]
$onlyIf[$voiceID[$authorID]!=;\`❌ Join a VC first.\`] 
$onlyForIDs[$botOwnerID;]
`
}]