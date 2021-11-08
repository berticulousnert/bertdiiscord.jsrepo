module.exports = ({
name: "disable",
code: `
$setUserVar[command;disabled;$commandInfo[$message[1];name]]
$sendMessage[The \`$commandInfo[$message[1];name]\` command was disabled!;no]
$onlyIf[$commandInfo[$message[1];name]!=;That command doesn't exist]
$onlyPerms[manageserver;no u]
`
})