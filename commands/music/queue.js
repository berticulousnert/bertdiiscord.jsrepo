module.exports = [{

name: "queue",

  code: `

$title[1;Queue]



$description[1; Songs In queue : $queueLength

$queue[1;10;[{title}]({url}) | <@{user.id}>\n]



]

$color[1;#000001]



$onlyif[$queueLength!=0; Nothing is playing now in this server.]





`

}]