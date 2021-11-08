module.exports = ({
name:"set-suggestions",
category:"General",
aliases:['suggestions', 'enable-suggestions'],
description:"Enables and sets the suggestions module for the server.",
usage:"set-suggestions <channel where the suggestions go>",
code:`$author[Suggestions module;$useravatar[$clientid]]
$description[The suggestions will be redirected to <#$mentionedchannels[1]>, and people can only suggest in <#$mentionedchannels[2]>!]
$color[f200f2]
$footer[Thanks for the support!;$authoravatar]
$setservervar[suggest_channel;$mentionedchannels[1]]
$setservervar[suggest_where;$mentionedchannels[2]]
$onlyif[$mentionedchannels[2]!=;Mention 2 channel please! First channel is where the suggestions will be sent, second is where the people can suggest]
$onlyperms[manageserver;You are required to have the manage server permissions to do this!] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`})