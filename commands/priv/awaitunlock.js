 module.exports = {
  type: 'awaitedCommand',
  name: 'unlockall',
  code: `
  $modifyChannelPerms[$channelID;+sendmessages;$guildID] 

  $blackListIDs[704134457812320306;Know ur self]

  `
}