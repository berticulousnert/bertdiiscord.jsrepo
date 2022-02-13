module.exports = {
  name: "random fact",
  aliases: ['rf'],
code: `$title[1;Random Fact] $description[1;$jsonRequest[https://api.popcat.xyz/fact;fact;API endpoint is currently unavaliable]] $color[1;RANDOM] $onlyif[1==2;Command disabled]`
}