module.exports = {
  type: 'joinCommand',
  channel: "$getServerVar[setwelcome]",
  code:`$title[]
$description[・**Welcome!**
<:Re:885213737420722186>Hello __[$username](https://discord.gg/rob)__


> Please read <#769650299195359292> to know what you're allowed to do, and what you should avoid doing.
> ‌
> Please check <#777782685522984962> to let us know what things you'd like to get pinged for.
]

$thumbnail[$authorAvatar]
$color[#BAE68D]
$onlyForServers[768927312178577449;] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled] `
} 