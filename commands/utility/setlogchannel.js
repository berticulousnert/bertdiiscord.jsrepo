module.exports = {
  name: "set-logchannel",
  code: `$setServerVar[wbid;$splitText[1]] $setServerVar[wbtk;$splitText[2]]
  $textSplit[$createWebhook[$getServerVar[logchannel];Bert Logs;$userAvatar[$clientID]; ]; ]
  Log channel has been set to <#$findChannel[$mentioned[1]]>  $setServerVar[logchannel;$findChannel[$message]] $onlyPerms[managechannel;You must have manage channel perms bozo] $onlyBotPerms[managechannel;Heyy- can i pwitty pwease get manage channel perms?] $onlyif[$getServerVar[logchannel]==;Sorry a log channel has already been set please use $getServerVar[prefix]reset-logchannel to reset the log channel. $suppressErrors`
}