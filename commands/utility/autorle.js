module.exports = {
  type: 'joinCommand',
  channel: "$getServerVar[setwelcome]",
  code:`$giveRole[$authorID;$getServerVar[autorolej]] $suppressErrors $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
} 