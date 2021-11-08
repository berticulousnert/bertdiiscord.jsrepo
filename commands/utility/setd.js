module.exports = {
  name: "setd",
  code: `$setServerVar[jd;$message]
  $onlyPerms[admin;] successfully set description
$blackListIDs[704134457812320306;Know ur self] $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**] $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
} 