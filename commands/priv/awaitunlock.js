 module.exports = {
  type: 'awaitedCommand',
  name: 'unlockall',
  code: `
  $modifyChannelPerms[$channelID;+sendmessages;$guildID] 

  
  `
}