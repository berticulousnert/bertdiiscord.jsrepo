module.exports = {
  name: "resetprefix",
  code: `$resetServerVar[prefix]
  Prefix reseted to \`.\`
  $onlyPerms[admin;]
 $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`
}