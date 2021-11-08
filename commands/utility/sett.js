module.exports = {
  name: "sett",
  code: `$setServerVar[jt;$message]
  $onlyPerms[admin;]successfully set title
   $blackListIDs[704134457812320306;Know ur self]  $blacklistServerIDs[768927312178577449;] $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}