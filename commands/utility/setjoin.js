module.exports = {
  name: "setjoin",
  code: `$setServerVar[setwelcome;$mentionedChannels[1]]
Successfully set the <#$mentionedChannels[1]> as the welcome channel.
  $argsCheck[1;Please mention a channel to send the welcome message to.]
  $onlyPerms[admin;] $blackListIDs[704134457812320306;Know ur self] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}