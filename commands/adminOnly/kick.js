module.exports = {
 name:"kick",
 if: "v4",
 code: ` $channelSendMessage[$getServerVar[logchannel];{newEmbed:{description:kick | case }{field:Offender:$userTag[$mentioned[1]] <@$mentioned[1]>}{field:Reason: $getServerVar[kickmessage]}{field:Responsible moderator: $userTag}{color:BLUE}{footer:ID#COLON# $mentioned[1]}{timestamp}] $if[$getServerVar[logchannel==;]] $endif $setServerVar[kickmessage;$noMentionMessage] $kick[$mentioned[1];$guildID;0;$if[$noMentionMessage==;Not Privded;$noMentionMessage]]
 $title[1;Member kicked!]
 $description[1;<@$authorID> kicked <@$mentioned[1]>
 Reason: $if[$noMentionMessage==;Not Privded;$noMentionMessage]
 $color[1;RED]
 $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];You can't kick someone with a higher role than you]
 $onlyIf[$highestRole[$mentioned[1]]!=$highestRole[$authorID];You can't kick someone with the same highest role]
 $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];I can't kick someone with higher role than me]
 $onlyIf[$highestRole[$mentioned[1]]!=$highestRole[$clientID];I can't kick someone with the same highest role as mine]
 $onlyIf[$mentioned[1]!=$ownerID;You can't kick the server owner]
 $onlyIf[$mentioned[1]!=$authorID;I am sure you don't want to do that]
 $onlyIf[$mentioned[1]!=$clientID;I can't kick myself]
 $onlyIf[$isMentioned[$mentioned[1]]==true;You need to mention someone you want me to kick]
 $onlyIf[$hasPerms[$guildID;$authorID;kick]==true;You don't have \`KICK\` permisions]
 $onlyBotPerms[kick;I don't have \`KICK\` permissions]`
}