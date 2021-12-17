module.exports = {
  name: "help",
  $if: "v4",
  code: `
$addButton[1;All commands;5;https://www.bert-bot.tk/;no;]

$title[1;╭•Help] $description[1;**Main Command** \`\`$getServerVar[prefix]Help\`\` \n Gives the website where all bert commands are.
**Easter egg** \n If you are able to find one of berts hidden command you get premium for one month. 

**Extra info** \n to get to the commands scroll down a bit and this is not the finish product this can change at any time.] $color[1;#8700ff] $footer[1;Enjoy!;$authorAvatar]

$onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`

}
//nop
//reminder clickhelp goes after 3
//found out what is the prob?