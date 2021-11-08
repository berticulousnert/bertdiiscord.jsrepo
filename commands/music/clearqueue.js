module.exports = {
name: "clearqueue",
code: `$clearSongQueue
$editIn[125ms;✅ Cleared queue. from **$queueLength song** to **0**] ⚠️ Clearing...
$onlyIf[$queueLength!=0;**⛔ Nothing song was playing**] $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**] $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];You need to use same voice channel as the bot!] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}