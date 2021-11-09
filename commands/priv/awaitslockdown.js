module.exports = {
  type: 'awaitedCommand',
  name: 'lockall',
  code: `
  $modifyChannelPerms[$channelID;-sendmessages;$guildID] 


  `
}