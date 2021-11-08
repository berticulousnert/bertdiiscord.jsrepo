module.exports = {
  type: 'awaitedCommand',
  name: 'question-7',
  code: `$getServerVar[question7] $awaitMessages[$authorID;15s;8;question-8;] $onlyif[$getServerVar[question7]!=;No questons set]
  $setServerVar[setqtitle;Application]
 $setServerVar[setqdescription7;$getMessage[$channelID;$messageID;content]]
 $setServerVar[setqfooter;Accept or decline?]
 $setServerVar[setqcolor;#000000]

`
}