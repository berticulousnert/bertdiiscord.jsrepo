module.exports = ({
name: "purge",
code: `
$sendMessage[**$message[1] Messages deleted successfully**{delete:2s};no]
$clear[$message[1];everyone]
$wait[2s]
$deletecommand
$onlyIf[$isNumber[$replaceText[$replaceText[$checkCondition[$message==];true;100];false;$message]]==true;:x: Please provide a valid amount! {delete:5s}]
`
})