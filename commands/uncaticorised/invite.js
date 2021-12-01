module.exports = {
  name: 'invite',
  code: `$addButton[1;Invite;5;https://discord.com/api/oauth2/authorize?client_id=872985150907088928&permissions=8&scope=bot;no;]
  $description[1;・[Invite Bot!](https://www.youtube.com/watch?v=DzRA7V2ytt8 'click')\n<:Re:885213737420722186>Tap the button below to invite the bot!] $color[1;#FFEAA9] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}