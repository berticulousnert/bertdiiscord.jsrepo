module.exports = {
  name: "activity",
  $if: "v4",
  code: `
 $onlyif[$message!=;{newEmbed:{title: Bro??}{description: You must choose what i should host P.S It the words are case sensitive. \n ***Avaliable: Youtube, Poker, Betrayal, Chess, Fishington, Lettertile, Wordsnack, Doodlecrew, Spellcast, Awkword***}{footer:PC only.}{color: #91B2C7}}]

$if[$message==Youtube;Error]
 Starting Youtube $djseval[
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'youtube').then(async invite => {
 return message.channel.send(invite.code);
 });
 ]
$endif
$if[$message==Poker;Error]
Starting Poker $djseval[
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'poker').then(async invite => {
 return message.channel.send(invite.code);
 });
 ]
$endif
$if[$message==Betrayal;Error]
Starting Betrayal $djseval[
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'betrayal').then(async invite => {
 return message.channel.send(invite.code);
 });
 ]
 $endif
$if[$message==Chess;Error]
Starting Chess $djseval[
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'chess').then(async invite => {
 return message.channel.send(invite.code);
 });
 ] 
 $endif
 $if[$message==Fishington;Error]
 Starting Fishington $djseval[
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'fishing').then(async invite => {
 return message.channel.send(invite.code);
 });
 ]
 $endif
 $if[$message==Lettertile;Error]
Starting Letter tile $djseval[
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'lettertile').then(async invite => {
 return message.channel.send(invite.code);
 });
 ]
 $endif
 $if[$message==Wordsnack;Error]
Starting Word snack $djseval[
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'wordsnack').then(async invite => {
 return message.channel.send(invite.code);
 });
 ]
 $endif
 $if[$message==Doodlecrew;Error]
Starting Doodle crew $djseval[
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'doodlecrew').then(async invite => {
 return message.channel.send(invite.code);
 });
 ] 
 $endif
 $if[$message==Spellcast;error]
Starting Spell cast $djseval[
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'spellcast').then(async invite => {
 return message.channel.send(invite.code);
 });
 ]
 $endif
 $if[$message==Awkword;Error]
Starting Awkword $djseval[
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'awkword').then(async invite => {
 return message.channel.send(invite.code);
 });
 ]
 $endif
$onlyif[1==2;Command disabled]`
}