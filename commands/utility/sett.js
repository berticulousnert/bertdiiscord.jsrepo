module.exports = {
  name: "sett",
  code: `$setServerVar[jt;$message]
  $onlyPerms[admin;]successfully set title
   $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}