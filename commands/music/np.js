module.exports = [{

name: "nowplaying",

 aliases: "np",

  code: `

$title[1;Now Playing]

$thumbnail[1;$songInfo[thumbnail]]

$description[1;

**Playing :**

[$songInfo]($songInfo[url])

**Song By : **

\`$songInfo[author]\`

** Duration :**

\`$humanizeMS[$songInfo[duration]]\`

$color[1;#000001]



$onlyif[$queueLength!=0; Nothing is playing now in this server.]



`

}]