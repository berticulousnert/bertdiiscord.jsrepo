module.exports = {
  name: "set-logchannel",
  code: `$setServerVar[logchannel;$findChannel[$message]]
  Log channel has been set to <#$findChannel[$message]>  $onlyPerms[managechannel;You must have manage channel perms bozo] $onlyBotPerms[managechannel;Heyy- can i pwitty pwease get manage channel perms?]`
}