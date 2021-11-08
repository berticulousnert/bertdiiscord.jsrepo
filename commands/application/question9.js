module.exports = {
  type: 'awaitedCommand',
  name: 'question-9',
  code: `$getServerVar[question9] $awaitMessages[$authorID;15s;10;question-10;] $onlyif[$getServerVar[question9]!=;No questions set]

   $setServerVar[setqtitle;Application]
 $setServerVar[setqdescription9;$getMessage[$channelID;$messageID;content]]
 $setServerVar[setqfooter;Accept or decline?]
 $setServerVar[setqcolor;#000000]
 
`
}