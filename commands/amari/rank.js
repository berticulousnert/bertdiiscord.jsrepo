module.exports = {
  name: 'ar',
  aliases: "amari",
  $if: "v4",
  description: 'Get a users Amari Level',
  code: `
  $if[$checkContains[$splitText[1];ERR0R]==true]
  $title[1;ERR0R!] $description[・1;Possible reasons:\n:BOT_repline:・AmariBot is not in server!\n<:BOT_line:881594665474867210><:BOT_reply:881594541860347994>・*(We will add a fix to this Soon:tm:)*\n<:BOT_reply:881594541860347994>・The user's leaderboard position is more than 1000\n<:BOT_reply:881594541860347994>・The Current fix is to add \`-nlb\` at the end of the command]
  $else
  $log[$splitText[5]]
  $addField[1;Thanks!;Thanks to Amari for providing us with a great API!]
  $footer[1;Made by: $userTag[808368246600368169];$userAvatar[808368246600368169]]
  $description[1;**・Amari Info for: <@!$splitText[1]>**\n<:yR:885213928743927910>・Level: $splitText[3]\n<:yR:885213928743927910>・XP: $splitText[2]\n<:yR:885213928743927910>・Weekly XP: $splitText[4]\n<:Re:885213737420722186>・Leaderboard Position: $splitText[5]]
  $endif
  $textSplit[$djsEval[
    (async()=>{
      const { AmariBot } = require('amaribot.js')
      const abinfo = new AmariBot(process.env.aTOKEN)
      try {
        let ab = await abinfo.getUserLevel(guild.id, d.vars['usrr'])
        let ablb = await abinfo.getLeaderboardPosition(guild.id, d.vars['usrr'])
        let inf = ab.id + '/' + ab.exp + '/' + ab.level + '/' + ab.weeklyExp + '/' + ablb
        return inf;
      }
      catch(err) {
        console.log(err)
        let infoo = 'ERR0R/BAD'
        return infoo;
      }
    })()
  ;yes];/]
  $let[usrr;$findUser[$message;yes]]
  $onlyIf[$isBot[$findUser[$message;yes]]==false;You can't mention a bot!]
  
  `
}