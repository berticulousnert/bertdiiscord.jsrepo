module.exports = {
  type: 'interactionCommand',
  name: "click",
  prototype: "button",
  code: `$interactionReply[You have been verified!;;;64;4]
  $giveRole[$authorID;768956123079770113;]
  $deleteIn[5] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}