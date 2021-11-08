module.exports = ({
name: "purge",
code: `
$if[$message[2]==]
$sendMessage[**$message[1] Messages deleted successfully**{delete:2s};no]
$clear[$message[1];everyone;$channelID;no]
$wait[2s]
$deletecommand
$onlyIf[$isNumber[$replaceText[$replaceText[$checkCondition[$message==];true;100];false;$message]]==true;:x: Please provide a valid amount! {delete:5s}]

$elseIf $deletecommand[$message[2]!=]
$sendMessage[**$message[2] Messages deleted successfully**{delete:2s};no]
$clear[$message[2];$findUser[$message[1]];$channelID;no]
$wait[2s]
$deletecommand
$endelseIf
$endif
$onlyPerms[managemessages;:x: You need manage messages permission {delete:2s}]
$onlyBotPerms[managemessages;:x: I don't have manage messages permission! {delete:2s}]
$onlyIf[$message!=;Usage: $getServerVar[prefix]purge <no.> or $getServerVar[prefix]purge <user> <no.>] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]
`
})