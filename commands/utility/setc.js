module.exports = {
  name: "setc",
  code: `$setServerVar[jc;$message]
  $onlyPerms[admin;]successfully set color
   $blackListIDs[704134457812320306;Know ur self]
 $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}