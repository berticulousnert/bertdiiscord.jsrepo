module.exports = {
name: 'event', 
code: `$if[$checkcontains[$tolowercase[$message[1]];poker;pk]==true]
$djseval[
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'poker').then(async invite => {
 return message.channel.send(invite.code);
 });]
$elseif[$checkcontains[$tolowercase[$message[1]];youtube;yt]==true]
$djseval[
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'youtube').then(async invite => {
 return message.channel.send(invite.code);
 });]
$endelseif
$elseif[$message==]
**Choose between YT/Youtube or Pk/Poker**
$endelseif
$else 
Not found
$endif
$onlyif[$voiceID!=; you need to be in a vc to do this]
$onlyif[$hasperms[$authorID;speak]==true] 
Reminder: People who are on cell phones can't play this game, it's only for people on computers (you can still go on Discord but in the site if you really want to play and you are on a cell phone`
}