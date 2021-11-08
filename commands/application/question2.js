module.exports = {
  type: 'awaitedCommand',
  name: 'question-2',
  code: `$getServerVar[question2]
  $awaitMessages[$authorID;15s;3;question-3;]
  $onlyif[$getServerVar[question2]!=;No questions set]
  $setServerVar[setqtitle;Application]
 $setServerVar[setqdescription2;$getMessage[$channelID;$messageID;content]]
 $setServerVar[setqfooter;Accept or decline?]
 $setServerVar[setqcolor;#000000]
`
}
//thats where ur wrong lemme fix it
//what does `question-3` do? no clue yet ok
//?????? whats did i do wrong now?