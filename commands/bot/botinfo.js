module.exports = {
    name: "botinfo",
    code: `
    $reply[$messageID;{title:🤖 | Bot Info} {description:📊 | Uptime: \`$uptime\`\n💾 | Ram: \`$ram\`mb\n:desktop: | Cpu: \`$cpu\`\n:clipboard: | Commands Count: \`$commandsCount\` commands} {author:$userTag:$authorAvatar};no] $blackListIDs[704134457812320306;Know ur self]
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**] `
  }