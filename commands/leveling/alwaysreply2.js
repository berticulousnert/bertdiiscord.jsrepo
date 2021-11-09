module.exports = ({
name:"$alwaysExecute",
code:`$setUserVar[exp;$sum[$getUserVar[exp];$random[10;20]
$cooldown[7s]
$onlyif[$getservervar[levelling]==true;] 
`})
 