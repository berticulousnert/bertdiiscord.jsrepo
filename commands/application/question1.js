module.exports = {
  type: 'awaitedCommand',
  name: 'yes',
  code: `$getServerVar[question1]
  $awaitMessages[$authorID;15s;$message[1];question-2;error] $onlyif[$getServerVar[question1]!=;No questions set Run ".setq1" to set the first question]

 $setServerVar[setqtitle;Application]
 $setServerVar[setqdescription1;dw for now]
 $setServerVar[setqfooter;Accept or decline?]
 $setServerVar[setqcolor;#000000]
`
}

