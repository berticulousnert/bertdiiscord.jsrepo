module.exports = {
 name: "tempban",
 code: `
 <@$mentioned[1]> has been successfully unbanned due to temp-ban.
 $unban[$mentioned[1]]
 $wait[$message[2]]
 $ban[$mentioned[1]]
 $channelSendMessage[$channelID;<@$mentioned[1]> has been successfully temp-banned for $message[2], I will send a message when they are unbanned.]
 $argsCheck[>2;Please mention a user to temp-ban & enter a time!]
 $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];That user is higher than me on role position]
 $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];That user is higher than you or on same role position.]
 $onlyIf[$mentioned[1]!=$authorID;You can't ban yourself]
 $onlyIf[$mentioned[1]!=;\`\`$getServerVar[prefix]tempban <member> [duration]
         ^^^^^^^^
member is a required argument that is missing.\`\`]
$blackListIDs[704134457812320306;Know ur self] $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**] 
$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{newEmbed: {title:Mod Logs}{field:Action:tempBan}{field:Moderator:$username}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}}]
$endif 
$onlyIf[$findUser[$message[1]]!=$clientID;**I can't tempban my self**]
$onlyIf[$findUser[$message[1]]!=$authorID;**\`\`$getServerVar[prefix]tempban <member> [duration]
         ^^^^^^^^
member is a required argument that is missing.\`\`**] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}