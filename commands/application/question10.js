module.exports = {
  type: 'awaitedCommand',
  name: 'question-10',
  code: `$getServerVar[question10] $onlyif[$getServerVar[question10]!=;No question set]
 
 $setServerVar[setqtitle;Application]
 $setServerVar[setqdescription10;$getMessage[$channelID;$messageID;content]]
 $setServerVar[setqfooter;Accept or decline?]
 $setServerVar[setqcolor;#000000]

`
}

//10