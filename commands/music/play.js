module.exports = {
 name: "play",
 code: `$argsCheck[1;Please say a song i should play or make the bot join a channel] $suppressErrors[Connection error] $onlyIf[$voiceid[$authorid]!=; Please join a Voice Channel and use this command.]
 Added $lavalinkExecute[songinfo;title] to queue
 $let[a;$lavalinkExecute[$replaceText[$replaceText[$lavalinkExecute[isIdling];true;play];false;volume]]]
 $log[$lavalinkExecute[isIdling]|$lavalinkExecute[isPlaying]|$lavalinkExecute[isPaused]]
 $let[a;$lavalinkExecute[addtrack;$get[key];1]]
 $let[key;$lavalinkExecute[search;$message]]

 `
};