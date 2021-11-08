module.exports = {
  name: ".resetprefix",
  nonPrefixed: true,
  code: `$resetServerVar[prefix]
  Prefix reseted to \`.\`
  $onlyPerms[admin;]
  $blackListIDs[704134457812320306;Know ur self] $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}