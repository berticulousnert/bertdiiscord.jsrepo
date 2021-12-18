module.exports = {
 name:"ban",
 code: `$ban[$mentioned[1];$guildID;0;$if[$noMentionMessage==;Not Privded;$noMentionMessage]]
 $title[1;Member Banned!]
 $description[1;<@$authorID> banned <@$mentioned[1]>
 Reason: $if[$noMentionMessage==;Not Privded;$noMentionMessage]
 $color[1;RED]
 $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];You can't ban someone with a higher role than you]
 $onlyIf[$highestRole[$mentioned[1]]!=$highestRole[$authorID];You can't ban someone with the same highest role]
 $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];I can't ban someone with higher role than me]
 $onlyIf[$highestRole[$mentioned[1]]!=$highestRole[$clientID];I can't ban someone with the same highest role as mine]
 $onlyIf[$mentioned[1]!=$ownerID;You can't ban the server owner]
 $onlyIf[$mentioned[1]!=$authorID;I am sure you don't want to do that]
 $onlyIf[$mentioned[1]!=$clientID;I can't ban myself]
 $onlyIf[$isMentioned[$mentioned[1]]==true;You need to mention someone you want me to ban]
 $onlyIf[$hasPerms[$guildID;$authorID;ban]==true;You don't have \`BAN\` permisions]
 $onlyBotPerms[ban;I don't have \`BAN\` permissions]`
}