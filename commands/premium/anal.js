module.exports = ({
 name: "anal",
 code: `
$onlyNsfw[This command can only be used in the NSFW channel ❌]
$jsonRequest[https://api.avux.ga/anal?key=berticlousnert;message;API endpoint down.]
$cooldown[7s;Ayy,Youre doing this to fast. There isn't that much in this command]
 $onlyIf[$getUserVar[premium;$authorID]==true;**⛔ You need \`premium\` to use this command**] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
})