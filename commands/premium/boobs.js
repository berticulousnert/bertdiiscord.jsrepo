module.exports = {
  name: "boobs",
  code: `$jsonRequest[https://api.avux.ga/boobs?key=berticulousnert;message;API endpoint down.]
  $cooldown[7s;Ayy,Youre doing this to fast. There isn't that much in this command]
 $onlyIf[$getUserVar[premium;$authorID]==true;**⛔ You need \`premium\` to use this command**] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]
 $onlyNsfw[This command can only be used in the NSFW channel ❌]`
}