module.exports = {
 name: "play",
 code: `$onlyIf[$voiceid[$authorid]!=; Please join a Voice Channel and use this command.]
 Added $lavalinkExecute[songinfo;title] to queue
 $let[a;$lavalinkExecute[$replaceText[$replaceText[$lavalinkExecute[isIdling];true;play];false;volume]]]
 $log[$lavalinkExecute[isIdling]|$lavalinkExecute[isPlaying]|$lavalinkExecute[isPaused]]
 $let[a;$lavalinkExecute[addtrack;$get[key];1]]
 $let[key;$lavalinkExecute[search;$message]]
$suppressErrors[Bro check if im ur vc and try again or Try actually playing a song]
 $onlyif[$message!=;What should i play rick roll? example .play <song>]  
 `
};