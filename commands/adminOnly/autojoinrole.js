module.exports = {
  name: "",
  type: "join",
  code: `$onlyif[$getServerVa[autojoinrole]!=;] $giveRole[$guildid;$authorID;$getServerVar[autojoinrole]] $log[Gave $userTag[$authorID] a role role]
  `
}

// $onlyif[$guildID==821998081691746304;]