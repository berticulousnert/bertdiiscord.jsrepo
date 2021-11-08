module.exports = {
  type: 'awaitedCommand',
  name: 'question-4',
  code: `$getServerVar[question4] $awaitMessages[$authorID;15s;5;question-5;] $onlyif[$getServerVar[question4]!=;No questions set]
   $setServerVar[setqtitle;Application]
 $setServerVar[setqdescription4;$getMessage[$channelID;$messageID;content]]
 $setServerVar[setqfooter;Accept or decline?]
 $setServerVar[setqcolor;#000000]
 
`
}