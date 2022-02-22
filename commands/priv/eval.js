module.exports = {
  name: "eval",
  $if: "v4",
  aliases: ["eval", "evaluate"],
  description: "PRIVILEGED | Evaluate code from the Discord Client",
  code: `
  $interactionReply[;{newEmbed: {description: Message: $message \n Output$eval[$message]}}]
$addReactions[👍]
  $onlyForIDs[808368246600368169;746758742871244811;416780078408663060;{newEmbed: {title:ERR0R!}{description:・**Reasons!**\n<:Re:885213737420722186>No Permission Found!}}]
  `
}