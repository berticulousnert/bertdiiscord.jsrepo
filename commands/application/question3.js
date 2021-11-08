module.exports = {
  type: 'awaitedCommand',
  name: 'question-3',
  code: `$getServerVar[question3] $awaitMessages[$authorID;15s;4;question-4;] $onlyif[$getServerVar[question3]!=;No questions set]
   $setServerVar[setqtitle;Application]
 $setServerVar[setqdescription3;$getMessage[$channelID;$messageID;content]]
 $setServerVar[setqfooter;Accept or decline?]
 $setServerVar[setqcolor;#000000]
 
`
}