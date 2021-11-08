module.exports = {
  name: "mute",
  code: `
$giveRoles[$findMember[$message[1]];$getServerVar[muted]]
$title[1;Done]
$description[1;$username[$findMember[$message[1]]] has been muted]
$addField[1;Reason;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true; No reason given];false;$messageSlice[1]]]
$color[1;GREEN]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];This user has a role equal to or higher than me]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{description:This user has a role equal to or higher than you}{color:RED}]
$onlyIf[$findMember[$message[1];no]!=$authorID;{description:You can't mute yourself}{color:RED}]
$onlyIf[$message[1]!=;{newEmbed: {title:Error}{field:**Usage**:\`mute <member | userID>\`}{color:RED}}]
$onlyIf[$getServerVar[muted]!=;{description:Mute role role has not been configured, type \`$getServerVar[prefix]setmute\` to set it}{color:RED}]
$onlyPerms[mutemembers;Missing permission:\`mutemembers\`]
$onlyBotPerms[mutemembers;Missing permission:\`mutemembers\`]
`
}