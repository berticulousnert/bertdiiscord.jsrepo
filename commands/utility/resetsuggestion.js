	
module.exports = ({
name:"reset-suggestions",
category:"General",
aliases:['suggestions-disable', 'disable-suggestions'],
description:"Disables the suggestions module for the server.",
usage:"disable-suggestions",
code:`$author[Suggestions module disabled!;$useravatar[$clientid]]
$description[You have successfully disabled the suggestions module!]
$color[FF0000]
$footer[Thanks for using me!;$authoravatar]
$setservervar[suggest_channel;]
$setservervar[suggest_count;0]
$onlyperms[manageserver;You are required to have the manage server permissions to do this!] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`})