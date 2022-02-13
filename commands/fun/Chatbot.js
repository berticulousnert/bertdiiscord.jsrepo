module.exports = ({
	name: '$alwaysExecute',
	code: `  
$reply[$messageID;yes]
$jsonRequest[https://api.popcat.xyz/chatbot?msg=$replaceText[$noMentionMessage; ;+;-1]&owner=Supreme Supreme#7475&botname=Bert;response;{newEmbed:{description:❌ Something went wrong!}{color:#ff0000}}]
$botTyping
$cooldown[2s;{newEmbed:{description:❌ Don't send messages to fast, you can break me by doing it}{color:RED}}]

$onlyIf[$checkContains[$message;nigger;Nigger;Nigga;nigga;@everyone;@here]==false;{newEmbed:{description:❌ Not a chance!}{color:#ff0000}}]

$onlyForChannels[$getServerVar[cbChannel];]

$suppressErrors
$onlyif[1==2;Command disabled]
$onlyIf[$getServerVar[cbChannel]!=;]
`
});
