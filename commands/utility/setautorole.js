module.exports = {
  name: "sjr",
  code: `$setServerVar[autorolej;$findRole[$message]] Auto join role has been set! $argsCheck[1;Please send the name/id or mention the role] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}