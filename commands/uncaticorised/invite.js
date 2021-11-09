module.exports = {
  name: 'invite',
  code: `$addButton[1;Invite;5;https://discord.com/api/oauth2/authorize?client_id=872985150907088928&permissions=8&scope=bot;no;]
  $description[1;・**Invite Bot!**\n<:Re:885213737420722186>Tap the button below to invite the bot!] $color[1;#FFEAA9] $blackListIDs[704134457812320306;Know ur self] $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}