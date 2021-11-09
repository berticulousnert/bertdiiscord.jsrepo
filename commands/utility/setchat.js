module.exports = {
  name: "setchat",
  code: `$setServerVar[chatbotset;$mentionedChannels[1]]
  Set the chatbot channel to <#$mentionedchannels[1]>
  $if[$checkContains[$mentionedChannels[1];remove]==true]
 Chatbot has been reset.
  $resetServerVar[chatbotset]
  $endif
  $onlyIf[$mentionedChannels[1]!=;You have to mention a channel]
  $onlyPerms[admin;Missing permission \`ADMINISTRATOR\`] $blackListIDs[704134457812320306;Know ur self] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}