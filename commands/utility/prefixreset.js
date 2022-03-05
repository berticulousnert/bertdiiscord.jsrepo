module.exports = {
  name: "resetprefix",
  code: `
  Prefix reseted to \`.\`
  $SetServerVar[prefix;.]
  $onlyPerms[admin;Hello non admin get away]
`}