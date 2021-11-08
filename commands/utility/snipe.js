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
$author[$userTag[$getChannelVar[author_snipe;$mentionedChannels[1;yes]]];$getChannelVar[icon_snipe;$mentionedChannels[1;yes]];https://ilikeblue.com]
$description[$getChannelVar[message_snipe;$mentionedChannels[1;yes]]]
$if[$userRoleColor[$getChannelVar[author_snipe;$mentionedChannels[1;yes]]]==#000000]
$color[00FF89]
$onlyForRoles[$getServerVar[snipeperms];You do not have the perms to use this command]
$else
$color[$userRoleColor[$getChannelVar[author_snipe;$mentionedChannels[1;yes]]]
$onlyPerms[managemessages;You do not have the perms to use this command]
$endif 
$addTimestamp
$footer[$serverName | #$getChannelVar[channel_snipe;$mentionedChannels[1;yes]]] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
 }]