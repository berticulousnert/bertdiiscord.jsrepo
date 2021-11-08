module.exports = {
  name: 'setprefix',
  code: `$setServerVar[prefix;$message[1]]
$argsCheck[<1;Choose a prefix]
Prefix Is Set With Success. New Prefix \`\`$message[1]\`\`
$suppressErrors[Something went wrong]
$createVar[prefix;]
$onlyPerms[admin;] $blackListIDs[704134457812320306;Know ur self] $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}