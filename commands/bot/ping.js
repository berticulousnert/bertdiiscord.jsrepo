module.exports = {
    name: "ping",
    code: `
    $reply[$messageID;{newEmbed: {title:🏓 | Pong!} {description:🤖 | Bot Ping: \`$botPing\`ms\n🔄 | WebSocket Ping: \`$ping\`ms\n💾 | Database Ping: \`$dbPing\`ms} {author:$userTag:$authorAvatar}};no] 
    $setVar[bping;$botPing]
    $setVar[wsping;$ping]
    $setVar[dbping;$dbPing]
    
  `
  }
