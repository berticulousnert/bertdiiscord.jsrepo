	
module.exports = ({
name:"reset-suggestions",
category:"General",
aliases:['suggestions-disable', 'disable-suggestions'],
description:"Disables the suggestions module for the server.",
usage:"disable-suggestions",
code:`$author[1;Suggestions module disabled!;$useravatar[$clientid]]
$description[1;You have successfully disabled the suggestions module!]
$color[1;FF0000]
$footer[1;Thanks for using me!;$authoravatar]
$setservervar[suggest_channel;]
$setservervar[suggest_count;0]
$onlyperms[manageserver;You are required to have the manage server permissions to do this!] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`})