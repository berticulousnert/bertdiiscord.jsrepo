module.exports = {
name:"reload",
aliases: "update",
code:`
$title[1;Reloaded Successfully]
$description[1;
**New Commands Count:** $get[new] command(s)\n
**Reloaded:** $commandsCount command(s)
]
$footer[1;$serverName;$serverIcon]
$thumbnail[1;$userAvatar[$clientID]]
$color[1;GREEN]
$addTimeStamp[1]
$channelSendMessage[$channelID;**Reloading Commands...**{delete:0.6s}]
$let[new;$math[$get[after]-$get[before]]]
$let[after;$commandsCount]
$updateCommands
$let[before;$commandsCount]
$onlyForIDs[$botOwnerID;808368246600368169;error]
` 
}