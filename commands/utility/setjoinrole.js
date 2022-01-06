module.exports = {
  name: "setjoinrole",
  aliases: "sjr",
  code: `$onlyPerms[admin;You need admin to run this command bozo] $setServerVar[autojoinrole;$findRole[$message]]
  $title[1;Auto join role has been set to <@!$findRole[$getServerVar[autojoinrole]>]
  `
}