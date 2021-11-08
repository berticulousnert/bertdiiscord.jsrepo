module.exports = ({
 name: "$alwaysExecute",
 code: `
$title[$username[$mentioned[1]] is AFK]
$description[・Reason\n<:Re:885213737420722186>$getUserVar[afkwhy;$mentioned[1]]]
<@!$authorID>
$onlyIf[$getUserVar[afk;$mentioned[1]]==y;]
$onlyIf[$isBot[$authorID]!=true;]
$onlyIf[$mentioned[1;yes]!=$authorID;]
`
})