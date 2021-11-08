module.exports = ({
 name: "$alwaysExecute",
 code: `
$setUserVar[afk;n;$authorID]
$setUserVar[afkwhy;;$authorID] 
$title[AFK Removed!]
$description[We have removed your AFK!]
<@!$authorID>
$color[#00FFFF]
$onlyIf[$sub[$djsEval[var second = new Date().getTime() / 1000;
  let seconds = Math.floor(second)
  seconds;yes];$getUserVar[afkts;$authorID]]>=5;]
$onlyIf[$getUserVar[afk;$authorID]==y;]`
})