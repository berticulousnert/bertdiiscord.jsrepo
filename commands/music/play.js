module.exports = {
name: "play",
aliases: ['p'],
code: `
Added queue 📥 $lavalinkExecute[songinfo;title] $lavalinkExecute[play;ytsearch:$message] 
$onlyIf[$message!=;{newEmbed: {title:Error}{description:**⛔ I need Song name to find a** \`song\`...}}]
$onlyIf[$voiceID!= <@!$clientID>;**⛔ You are Not in a Voice channel! Join a voice channel**]
$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];You need to use same voice channel as the bot!]
$cooldown[5s;Wait **%time%** to use this command again] $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]

`
}