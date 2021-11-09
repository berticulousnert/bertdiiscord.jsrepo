module.exports = {
  name: "<@!$clientID>",
  nonPrefiexed: true,
  code: ` My prefix is \`$getServerVar[prefix]\` $blackListIDs[704134457812320306;Know ur self] $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}