module.exports = {
  type: 'awaitedCommand',
  name: 'question-6',
  code: `$getServerVar[question6] $awaitMessages[$authorID;15s;7;question-7;] $onlyif[$getServerVar[question6]No questions set=;]
   $setServerVar[setqtitle;Application]
 $setServerVar[setqdescription6;$getMessage[$channelID;$messageID;content]]
 $setServerVar[setqfooter;Accept or decline?]
 $setServerVar[setqcolor;#000000]
 
`
}