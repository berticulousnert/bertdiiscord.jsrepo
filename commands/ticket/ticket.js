module.exports = [{
name: "ticketsetup",
$if: "v4",
code: `
$if[$getServerVar[ticketsystem1]==done]
$title[1;This sections has already been setup.To reset it, please do $getServerVar[prefix]resetticket
]
$else
$title[1;Please give me the ticket category ID]
$image[1;https://media.discordapp.net/attachments/931509413972443147/931862779609120778/ezgif-5-ff70dabe4d.gif]
$awaitMessages[$channelID;$authorID;60s;everything;ticketcat;Command has been cancelled]
$endIf`
 
}, {
 type: 'awaited',
 name: 'ticketcat',
 code: `
$title[1;✔**DONE**]
$description[1;Ticket catorgory setupped!]
$color[1;00FF00]
$footer[1;$serverName | $userTag[$clientID]]
$addTimestamp[1]
$title[2;Ticket Message]
$description[2;Please tell me the message you want to say for the ticket opening  button embed]
$color[2;FFA500]$footer[1;$serverName | $userTag[$clientID]]
$addTimestamp[1]
$awaitMessages[$channelID;$authorID;60s;everything;ticketmessage;Command has been cancelled]
$setServerVar[ticketcat;$message]
`
 
}, {
 type: 'awaited',
 name: 'ticketmessage',
 code: `
$title[1;✔**DONE**]
$description[1;Ticket message setupped!]
$color[1;00FF00]
$footer[1;$serverName | $userTag[$clientID]]
$addTimestamp[1]
$title[2;Ticket Message after opened]
$description[2;Please tell me the message tou want to say for the ticket after opening the ticket]
 
$color[2;FFA500]
$footer[1;$serverName | $userTag[$clientID]]
$addTimestamp[1]
$awaitMessages[$channelID;$authorID;60s;everything;ticketopenmessage;Command has been cancelled]
$setServerVar[ticketmessage;$message]
 
 
`
 
},{
  type: "awaited", 
  name: "ticketopenmessage",
  code: `
$title[1;✔**DONE**]
$description[1;Ticket system setupped!]
$color[1;00FF00]
$footer[1;$serverName | $userTag[$clientID]]
$addTimestamp[1]
$setServerVar[ticketsystem1;done]
$setServerVar[ticketmessage;message]
$channelSendMessage[$findChannel[$getServerVar[ticketchannelname]];{
 "embeds" : "{newEmbed:{title:Open A Ticket}{description:$getServerVar[ticketmessage]}{footer:$serverName | $userTag[$clientID]}{color:00FF00}}" ,
 "components" : "{actionRow:{button:Open Ticket:3:openticket}}"
 }]
$setServerVar[ticketchannelname;Ticket]
$createChannel[$guildID;Ticket;text;no;$getServerVar[ticketcat]]
$setServerVar[ticketafteropenmessage;$message] 
 
`
},{
  prototype: "button",
  name: "openticket",
  type: "interaction",
  code: `
 
 
$wait[1]
$awaitMessages[$get[ticketid];$authorID;1w;everything;ticketquestion;The owner of this ticket did not reply for a week. Moderators may close this ticket now.]
 
$let[ticketid;$newTicket[$username[$authorID] Ticket;{
"embeds" : "{newEmbed:{title:New Ticket}{description:$getServerVar[ticketafteropenmessage]}{footer:$serverName}{color:RANDOM}"
,
"components" : "{actionRow:{button:Transcript:primary:transcriptticket}{button:Delete:danger:deleteticket}{button:Close:success:closeticket}}"
};$getServerVar[ticketcat];yes;$interactionReply[Ticket Opened!;;;;;yes]]]
 
`
 
 
 
},{
name: "ticketquestion",
type: "awaited",
code: `
 
$title[1;Question Of $userTag[$authorID]]
$description[1;$message]
$footer[1;$serverName | $userTag[$clientID]]
$addTimestamp[1]
$deleteCommand
$color[1;RANDOM]
`
 
},{
name: "ticket",
  $if: "v4",
    code: `
$if[$channelCategoryID[$channelID]==$getServerVar[ticketcat]]
$title[1;Please chose they action that you want to do]
$addButton[1;Close;success;closeconfirm;no;🔒]
$addButton[1;Delete;danger;deleteconfirm;no;🗑]
$addButton[1;Transcript;primary;transcriptticket;no;📜]
$else
This is not in a ticket
$endif
`
},{
prototype: "button",
type: "interaction",
name: "deleteticket",
code: `
$interactionReply[Ticket closed;;;;;yes]
$deleteChannel[$channelID]
 
 
`
},{
 
prototype: "button",
type: "interaction",
name: "closeticket",
code: `
 
$editChannel[$channelID;closed-ticket;$default;$default;$default;$default;yes]
$interactionReply[Ticket Closed;;;;;yes]
`
},{
prototype: "button",
type: "interaction",
name: "transcriptticket",
code: `
$transcript
 
 
`
 
 
},{
  name: "deleteconfirm",
  prototype: "button",
  type: "interaction",
  code: 
`
$interactionReply[;{newEmbed:{title:Delete Ticket}{description:Please click the button to confirm your action}{footer:$serverName | Press Dimiss Message to cancel your action}};{actionRow:{button:Confirm:3:deleteticket:no:✔,0,false}};;;yes] 
 
 
`
} ]