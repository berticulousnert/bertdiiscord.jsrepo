module.exports = {
  type: 'awaitedCommand',
  name: 'question-8',
  code: `$getServerVar[question8] $awaitMessages[$authorID;15s;9;question-9;] $onlyif[$getServerVar[question8]!=;No questions set]

   $setServerVar[setqtitle;Application]
 $setServerVar[setqdescription8;$getMessage[$channelID;$messageID;content]]
 $setServerVar[setqfooter;Accept or decline?]
 $setServerVar[setqcolor;#000000]
 
`
}