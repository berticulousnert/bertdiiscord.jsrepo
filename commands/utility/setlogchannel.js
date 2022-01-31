module.exports = {
  name: "set-logchannel",
  code: `$setServerVar[wbid;$splitText[1]] $setServerVar[wbtk;$splitText[2]]
  $textSplit[$createWebhook[$getServerVar[logchannel];Bert Logs;$userAvatar[$clientID]; ]; ]
  $setServerVar[logchannel;$findChannel[$message]]
  Log channel has been set to <#$findChannel[$message]>  $onlyPerms[managechannel;You must have manage channel perms bozo] $onlyBotPerms[managechannel;Heyy- can i pwitty pwease get manage channel perms?] $onlyif[$getServerVar[logchannel]==;Sorry a log channel has already been set please use $getServerVar[prefix]reset-logchannel to reset the log channel.`
}