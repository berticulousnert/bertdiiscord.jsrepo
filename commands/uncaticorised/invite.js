module.exports = {
  name: 'invite',
  code: `$apiMessage[$channelID;;
  {description:・**Invite Bot!**\n<:Re:885213737420722186>Tap the button below to invite the bot!} {color:#FFEAA9} {footer::};{actionRow:Invite Bot!,2,5,https\\://discord.com/api/oauth2/authorize?client_id=872985150907088928&permissions=8&scope=bot};;no] $blackListIDs[704134457812320306;Know ur self] $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}