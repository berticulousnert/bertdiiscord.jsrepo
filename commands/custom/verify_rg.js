module.exports = {
  name: "verify",
  code: `
 $apiMessage[$channelId;;{author:Please tap on the button below to get verified::}{title:╭•Verification}{description:Why we ask you to get verified?
> In order to make our community safe from raid bots which are running on user accounts, we ask you to verify you're not a robot, since most of these bots are not smart enough to know where to go or what to do in order to get verified.}{color:#8700ff}{footer:discord.gg/rob:$authorAvatar};{actionRow:Verify,2,3,click};$messageID:false;no] $blackListIDs[704134457812320306;Know ur self] $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]
`
}