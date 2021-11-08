module.exports = {
    name:"sm",
    aliases: ['slowmode','slowm'],
    code:`$slowmode[$channelID;$noMentionMessage]
    Set slowmode to **$noMentionMessage**.
    $if[$checkContains[$message;remove]==true]
    $slowmode[$channelID;0]
    Slow mode has been removed.
    $endif
    $argsCheck[>1;Enter a value for slowmode. Like: 3, 3s, 3m, 3h etc. To remove slowmode simply type **remove**.]
    $onlyPerms[managechannels;You Missing permission \`MANAGE_CHANNELS\`]
    $onlyBotPerms[managechannels;Me Missing permission \`MANAGE_CHANNELS\`]
    $suppressErrors`
   }