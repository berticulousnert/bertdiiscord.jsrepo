module.exports = {
  name: 'setprefix',
  code: `$setServerVar[prefix;$message[1]]
Prefix Is Set With Success. New Prefix \`\`$message[1]\`\`
$suppressErrors[Something went wrong]
$onlyPerms[ADMINISTRATOR; You need the perms ADMINISTRATOR to use this command]`
}