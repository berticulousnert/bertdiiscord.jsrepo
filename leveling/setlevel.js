module.exports = ({
name:"set-leveling",
aliases:"leveling",
usage:"set-leveling (reset/<optional channel> <optional message>)",
description:"Set your levelling. If no message is specified, the original message is sent.",
category:"Leveling",
code:`$if[$message==reset]
$setservervar[levelling;false]
I successfully reset levelling for this server!
$else
$setservervar[leveling;true]
$setservervar[level_channel;$findchannel[$message[1]]]
$setservervar[level_msg;$replacetext[$replacetext[$checkcondition[$message[2]==];true;$getservervar[level_msg]];false;$nomentionmessage]]
Levelling system successfully set up! If you did not use any place holders, and want to use them, check below ->
{user.name} -> $username
{user.mention} -> <@$authorid>
{level} -> 1
$onlyif[$mentionedchannels[1]!=;Could not find the channel!]
$endif
$onlyperms[manageserver;Not enough permissions! You need manage server permissions to execute this!]
$onlyIf[$isBot[$mentioned[1;yes]]==false;`})