module.exports = {
  name: "setc",
  code: `$setServerVar[jc;$message]
  $onlyPerms[admin;]successfully set color
 $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}