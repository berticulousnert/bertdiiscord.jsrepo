module.exports = ({
  name: "afk",
  description: "Get an AFK status",
  usage: "afk <reason/status>",
  code: `
  $setUserVar[afk;y;$authorID]
  $setUserVar[afkwhy;$get[why];$authorID]
  $setUserVar[afkts;$get[ts];$authorID]
  $sendMessage[<@$authorID> {newEmbed: {title:I set your AFK} {description:・Reason\n<:Re:885213737420722186>$get[why]}};no]
  $if[$message==]
  $let[why;AFK]
  $else
  $let[why;$message]
  $endif
  $let[ts;$djsEval[var second = new Date().getTime() / 1000;
  let seconds = Math.floor(second)
  seconds;yes]]
  $onlyIf[$getUserVar[afk;$authorID]==n;{title:ERR0R:tm:!} {description:You are already AFK!}]
  
`
})