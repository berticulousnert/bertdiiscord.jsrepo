module.exports = {
  name: "say", 
  code: `
  $deleteWebhook[$splitText[1];$splitText[2]]
 $sendWebhookMessage[$splitText[1];$splitText[2];$message]
$textSplit[$createWebhook[$channelID;Bert Logs;$userAvatar[$clientID]; ]; ]
$onlyIf[$noMentionMessage!=;Unable to send **nothing**.]
`
};