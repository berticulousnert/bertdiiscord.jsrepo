module.exports = {
  type: 'awaitedCommand',
  name: 'question-5',
  code: `$getServerVar[question5] $awaitMessages[$authorID;15s;6;question-6;] $onlyif[$getServerVar[question5]!=;No questions set]
   $setServerVar[setqtitle;Application]
 $setServerVar[setqdescription5;$getMessage[$channelID;$messageID;content]]
 $setServerVar[setqfooter;Accept or decline?]
 $setServerVar[setqcolor;#000000]
 
`
}