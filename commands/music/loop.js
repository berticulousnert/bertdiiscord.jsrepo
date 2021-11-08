module.exports = {
name: "loop",
code: `Loop is set to $lavalinkExecute[loopqueue]
$onlyIf[$lavalinkExecute[isPaused]!=0;Nothing song was playing.]
$onlyIf[$voiceID!=;You need to join the voice channel first!] $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**] $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];You need to use same voice channel as the bot!] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}
