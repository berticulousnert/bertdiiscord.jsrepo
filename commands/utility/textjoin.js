module.exports = {
  name: ".setw",
  code: `
  $setServerVar[textwelcomemessage;$message]
  Successfully set text join message
  $onlyPerms[admin;]  $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}