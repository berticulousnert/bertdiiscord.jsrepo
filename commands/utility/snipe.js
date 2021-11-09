module.exports = [{
type: "deletedCommand",
channel: "$channelID",
code: `$setChannelVar[author_snipe;$authorID]
$setChannelVar[message_snipe;$message]
$setChannelVar[icon_snipe;$authorAvatar]
$setChannelVar[channel_snipe;$channelName[$channelUsed]]`
},{
 name: "snipe",
 code: `
$author[1;$userTag[$getChannelVar[author_snipe;$mentionedChannels[1;yes]]];$getChannelVar[icon_snipe;$mentionedChannels[1;yes]];https://ilikeblue.com]
$description[1;$getChannelVar[message_snipe;$mentionedChannels[1;yes]]]
$if[$userRoleColor[$getChannelVar[author_snipe;$mentionedChannels[1;yes]]]==#000000]
$color[1;#00FF89]
$onlyForRoles[$getServerVar[snipeperms];You do not have the perms to use this command]
$else
$color[1;$userRoleColor[$getChannelVar[author_snipe;$mentionedChannels[1;yes]]]
$onlyPerms[managemessages;You do not have the perms to use this command]
$endif 
$addTimestamp
$footer[1;$serverName | #$getChannelVar[channel_snipe;$mentionedChannels[1;yes]]] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
 }]