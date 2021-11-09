module.exports = ({
name: "unlock-all", 
aliases: ['unlock all', 'sunlockdown', 'uel'], 
code: `
$forEachGuildChannel[unlockall]
All channels have been unlocked.
$onlyPerms[manageserver;{description:**You are missing \`MANAGE_SERVER\` perm!**}{color:ff0000}{delete:60s}]
$onlyBotPerms[manageserver;embedlinks;externalemojis;addreactions;**Error**
\`\`\`] 
`
});
