module.exports = {
  name: "unmute",
  code: `
$takeRoles[$findMember[$message[1]];$getServerVar[muted]]
$title[1;Done]
$description[1;$username[$findMember[$message[1]]] has been unmuted]
$color[1;GREEN]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];This user has a role equal to or higher than me]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{newEmbed: {description:This user has a role equal to or higher than you}{color:RED}}]
$onlyIf[$findMember[$message[1];no]!=$authorID;{description:You can't unmute yourself}{color:RED}]
$onlyIf[$message[1]!=;{newEmbed: {title:Error}{field:**Usage**:\`unmute <member | userID>\`}{color:RED}}]
$onlyIf[$getServerVar[muted]!=;{description:Mute role role has not been configured, type \`$getServerVar[prefix]setmute\` to set it}{color:RED}]
$onlyPerms[mutemembers;Missing permission:\`mutemembers\`]
$onlyBotPerms[mutemembers;Missing permission:\`mutemembers\`]
$suppressErrors`
}