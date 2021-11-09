module.exports = {
  name: "eval",
  aliases: ["eval", "evaluate"],
  description: "PRIVILEGED | Evaluate code from the Discord Client",
  code: `
  $if[$checkContains[$message;process.exit(]==true]
  $reply[$messageID;{newEmbed: {title:ERR0R!}{description:An error occured!}{field:<:Re:885213737420722186>Error Text:Eval request contains dangerous words!:yes}};yes]
  $addCmdReactions[❌]
  $else
  $eval[$message]
  $addCmdReactions[👍]
  $endif
  $onlyForIDs[808368246600368169;746758742871244811;416780078408663060;{newEmbed: {title:ERR0R!}{description:・**Reasons!**\n<:Re:885213737420722186>No Permission Found!}}]
  `
}