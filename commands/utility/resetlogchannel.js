module.exports = {
  name: "reset-logchannel",
  code: ` $deleteWebhook[$getServerVar[wbid];$getServerVar[wbtk]]   $onlyPerms[managechannel; BOZO you must have manage channel perms to use this command] $onlyBotPerms[managechannel; BOZO I must have manage channel perms to execute this command] $resetServerVar[logchannel] Log channel should be reset. $suppressErrors`
}