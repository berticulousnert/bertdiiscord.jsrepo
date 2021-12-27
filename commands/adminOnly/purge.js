module.exports = ({
name: "purge",
code: `
$sendMessage[**$message[1] Messages deleted successfully**;no]
$clear[$message[1];everyone;$channelID]
$wait[2s]
$onlyIf[$isNumber[$replaceText[$replaceText[$checkCondition[$message==];true;200];false;$message]]==true;:x: Please provide a valid amount! {delete:5s}]
$suppressErrors[Yurr Discord limit is 100 messages.]
`
})