	
module.exports = ({
name:"suggest",
category:"General",
aliases:['idea'],
description:"Sends a suggestion to the suggestions channel of the server.",
usage:"suggest <suggestion>",
code:`$setservervar[suggest_count;$sum[$getservervar[suggest_count];1]]
$setservervar[su;$getservervar[su]$sum[$getservervar[suggest_count];1].$authorid.$splittext[1]/]
$textsplit[$channelsendmessage[$getservervar[suggest_channel];{author:$usertag:$authoravatar}{title:Suggestion #$sum[$getservervar[suggest_count];1]}{description:$message}{color:RED}{timestamp}{footer:$authorid};yes]; ]
$deletecommand
$onlyif[$channelid==$getservervar[suggest_where];You can only suggest in <#$getservervar[suggest_where]>!]
$onlyif[$message[5]!=;Please enter atleast 5 words!]
$onlyif[$serverchannelexists[$getservervar[suggest_where]]==true;I guess someone deleted the channel where people can suggest!]
$onlyif[$serverchannelexists[$getservervar[suggest_channel]]==true;I guess someone deleted the suggestions channel!]
$onlyif[$getservervar[suggest_channel]!=;The suggestions module is not yet enabled!] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`})