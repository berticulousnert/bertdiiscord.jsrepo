module.exports = {
    name: "botinfo",
    code: `
    $reply[$messageID;{newEmbed: {title:🤖 | Bot Info} {description:📊 | Uptime: \`$uptime\`\n💾 | Ram: \`$ram\`mb\n:desktop: | Cpu: \`$cpu\`\n:clipboard: | Commands Count: \`$commandsCount\` commands} {author:$userTag:$authorAvatar}};no]
   `
  }