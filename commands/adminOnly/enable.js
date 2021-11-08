module.exports = ({
name: "enable",
code: `
$setUserVar[command;enabled;$commandInfo[$message[1];name]]
$sendMessage[The \`$commandInfo[$message[1];name]\` command was enabled!;no]

$onlyIf[$commandInfo[$message[1];name]!=;That command doesn't exist]
$onlyPerms[manageserver;no u]
`
})