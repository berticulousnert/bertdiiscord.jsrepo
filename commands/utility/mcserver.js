module.exports = ({
name: "mcserver",
code: `$thumbnail[https://eu.mc-api.net/v3/server/favicon/$message[1]]
$description[Server Numerical IP: **$jsonRequest[https://api.mcsrvstat.us/1/$message[1];ip]:$jsonRequest[https://api.mcsrvstat.us/1/$message[1];port]**,
Host Name: **$jsonRequest[https://api.mcsrvstat.us/1/$message[1];hostname]**,
Players Online: **$jsonRequest[https://api.mcsrvstat.us/1/$message[1];players.online]** / **$jsonRequest[https://api.mcsrvstat.us/1/$message[1];players.max]**,
Version: **$jsonRequest[https://api.mcsrvstat.us/1/$message[1];version]**,
Protocol Version: **$jsonRequest[https://api.mcsrvstat.us/1/$message[1];protocol]**.]
$color[99b898]
$title[Server Online]
$footer[Made by MINECRAFT!]
$onlyIf[$jsonRequest[https://api.mcsrvstat.us/1/$message[1];hostname]!=undefined;{title:Server Online} {color:99b898} {description:Server Numerical IP: **$jsonRequest[https://api.mcsrvstat.us/1/$message[1];ip]:$jsonRequest[https://api.mcsrvstat.us/1/$message[1];port]**,
Players Online: **$jsonRequest[https://api.mcsrvstat.us/1/$message[1];players.online]** / **$jsonRequest[https://api.mcsrvstat.us/1/$message[1];players.max]**,
Version: **$jsonRequest[https://api.mcsrvstat.us/1/$message[1];version]**,
Protocol Version: **$jsonRequest[https://api.mcsrvstat.us/1/$message[1];protocol]**.}
{thumbnail:https://eu.mc-api.net/v3/server/favicon/$message[1]}]
$onlyIf[$jsonRequest[https://api.mcsrvstat.us/1/$message[1];offline]!=true;{title:Server Offline} {color:e84a5f} {description:**$message[1]** is Offline or it's an Invalid IP.}]
$onlyIf[$message[2]==;{title:Error...} {color:e84a5f} {description:The server ip must be only one word.}]
$onlyIf[$message[1]!=;{title:Error...} {color:e84a5f} {description:You must type the server ip you wanna check.}]`

})