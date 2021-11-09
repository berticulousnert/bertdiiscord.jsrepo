module.exports = {
  name: "help",
  code: `
$addButton[1;;{author:::}{title:╭•Help}{description: **Main Command** \`\`$getServerVar[prefix]Help\`\` \n Gives the website where all bert commands are.
**Easter egg** \n If you are able to find one of berts hidden command you get premium for one month. 

**Extra info** \n to get to the commands scroll down a bit and this is not the finish product this can change at any time.} {color:#8700ff}{footer:Enjoy!:$authorAvatar};{actionRow:All Commands,2,5,https\\://www.bert-bot.tk/}};$messageID:false;no] 

$blackListIDs[704134457812320306;Know ur self] $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`

}
//nop
//reminder clickhelp goes after 3
//found out what is the prob?