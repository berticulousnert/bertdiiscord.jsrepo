module.exports = {
 name:"function",
 code:`
$title[1;$jsonrequest[https://api.leref.ga/functions/$message[1];data[0].name];https://aoi.leref.ga/functions/$replacetext[$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].name];$;usd]]
$addField[1;Link:;[Click Me](https://aoi.leref.ga/functions/$replacetext[$jsonrequest[https://api.leref.ga/functions/$message[1];data[0].name];$;usd])]
$addField[1;Description:;\`\`\`html
$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].desc]\`\`\`]
$addField[1;Usage:;\`\`\`kt
$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].usage]\`\`\`]
$color[1;#0099FF]
$thumbnail[1;$authorAvatar]
$onlyIf[$jsonRequest[https://api.leref.ga/functions/$message[1];message]==;Error, command not found.]
$argsCheck[>1;Wrong usage, $getServerVar[prefix]function <function>] $onlyif[$authorID==746758742871244811;Not the owner]
`
} 