module.exports = {
  name: "<@!$clientID>",
  nonPrefiexed: true,
  code: ` My prefix is \`$getServerVar[prefix]\` $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}