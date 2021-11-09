module.exports = {
  name: "setd",
  code: `$setServerVar[jd;$message]
  $onlyPerms[admin;] successfully set description
 $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
} 