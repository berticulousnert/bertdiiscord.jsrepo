module.exports = {
  name: "setlc",
  code:`$channelSendMessage[$mentionedChannels[1]];$getServerVar[questionmessage]] Log channel Has been set.

  $setServerVar[questionlogchannel;$mentionedChannels[1]]
  

  $argsCheck[1;Please mention a channel]
  $title[$getServerVar[setqtitle]]
  $description[$getServerVar[setqdescription1]
$getServerVar[setqdescription2]
$getServerVar[setqdescription3]
$getServerVar[setqdescription4]
$getServerVar[setqdescription5]
$getServerVar[setqdescription6]
$getServerVar[setqdescription7]
$getServerVar[setqdescription8]
$getServerVar[setqdescription9]
$getServerVar[setqdescription10]]
  $footer[$getServerVar[setqfooter]]
  $color[$getServerVar[setqcolor]]
  
  
  $onlyPerms[managechannels;You Must have the perms "Manage Channels" to use this command`}