module.exports = {
  name: "",
  type: "join",
  code: `$onlyif[$guildID==821998081691746304;] $onlyif[$getServerVa[autojoinrole]!=;] $giveRole[$guildid;$authorID;$getServerVar[autojoinrole]] $log[Gave $userTag[$authorID] a role role]
  `
}
