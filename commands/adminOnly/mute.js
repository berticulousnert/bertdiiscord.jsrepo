module.exports = {
  name: "mute",
  code: `$timeoutMember[$guildId;$findMember[$message[1]];$message[2];no;Timed Out]
  $channelSendMessage[$ChannelID;Muted <@$findMember[$message[1];yes]>
  $onlyIf[$memberExists[$findUser[$message[1]]]==true;❌ Couldn't find a member with this ID/name/mention in the server]
  $onlyIf[$findUser[$message[1]]!=$ownerID;❌ I can't modify the server owner]
  $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]]; You can't mute someone with higher or the same roles as you]
  $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];I can't mute someone with higher or the same roles as me (ps this could be wrong i prob just didnt find the user)]
  $onlyif[$message[2]==;My guy who should i time out]
  $onlyif[$message[1]==;My guy how long should i time out]
  $onlyPerms[kick;User Missing permission:mutemembers]
  $onlyBotPerms[kick;Bot Missing permission:mutemembers]
  $suppressErrors[Ayo mans i have error ill send this to my owner  Spam == noob]`
}