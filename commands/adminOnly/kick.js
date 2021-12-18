module.exports = {
name: "kick",
code: `$kick[$findUser[$message[1]]]
 *laughs* Kicked
$onlyIf[$findUser[$message[1]]!=$clientID;**❌ I can't kick my self**]
$onlyIf[$findUser[$message[1]]!=$authorID;\`\`\`$getServerVar[prefix]kick <member> [reason]
         ^^^^^^^^
member is a required argument that is missing.\`\`\`]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];**❌ You can't kick someone with higher or the same roles as you**]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];I can't kick someone with higher or the same roles as me (ps this could be wrong i prob just didnt find the user)]
$onlyIf[$memberExists[$findUser[$message[1]]]==true;**❌ Couldn't find a member with this ID/name/mention in the server**]
$onlyIf[$findUser[$message[1]]!=$ownerID;**❌ I can't modify the server owner**]
$onlyIf[$message[1]!=;\`\`\`$getServerVar[prefix]kick <member> [reason]
      ^^^^^^^^

SyntaxError: member is a required argument that is missing.\`\`\`]
$onlyBotPerms[kick;**❌ The bot doesn't have enough permissions**]
$onlyPerms[kick;**❌ You don't have enough permission**]
$suppressErrors[**ERROR** Can't find user] `
}