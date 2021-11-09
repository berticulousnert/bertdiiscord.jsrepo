module.exports = ({
name: "lock-all", 
aliases: ['lock all', 'slockdown', 'el'], 
code: `
$forEachGuildChannel[lockall]
All channels have been locked.
$onlyPerms[manageserver;{description:**You are missing \`MANAGE_SERVER\` perm!**}{color:ff0000}{delete:60s}]
$onlyBotPerms[manageserver;embedlinks;externalemojis;addreactions;**Error**
\`\`\`] 
`
});
