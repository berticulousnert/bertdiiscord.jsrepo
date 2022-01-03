module.exports = {
name: "volume", 
code: `$suppressErrors[Connection Error] $lavalinkExecute[volume;$message[1]]
$onlyIf[$message[1]<1002;**⛔ Max volume 1000%**]
$onlyIf[$charCount[$message[1]]<4;Failed.]
$onlyIf[$isNumber[$message[1]]==true;Must number!]
$onlyIf[$message[1]!=;**⛔ Volume can change 0 - 1000**]
$editIn[1s;**✅ Changed to $message[1]%**] **Changing..**
$onlyIf[$lavalinkExecute[isPaused]!=0;**⛔ Nothing song was playing**]
$onlyIf[$voiceID!=;**⛔ You need to join the voice channel first**] $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];You need to use same voice channel as the bot!]`
}