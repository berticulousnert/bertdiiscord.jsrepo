module.exports = {
  type: 'interaction',
  name: "verify",
  prototype: "button",
  code: `$interactionReply[You have been verified!;;;;yes]
  $giveRole[$authorID;768956123079770113;]
  $deleteIn[5] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}