module.exports = {
  name: "setf",
  code: `$setServerVar[jf;$message]
  $onlyPerms[admin;] Successfully set footer
  $blackListIDs[704134457812320306;Know ur self] $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}