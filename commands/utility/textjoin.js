module.exports = {
  name: ".setw",
  code: `
  $setServerVar[textwelcomemessage;$message]
  Successfully set text join message
  $onlyPerms[admin;]  $blacklistServerIDs[768927312178577449;] $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}