module.exports = [{

name: "pause",

code: `$title[1;Song Paused :]

$description[1;Paused The player.]

$footer[1;$userTag[$clientID]]

$color[1;#000001]

$wait[1s]

$pauseTrack



$onlyif[$djseval[client.voiceManager.manager.players.get(guild.id).options.paused;yes]==false; You can't pause an already paused player.]



$onlyIf[$voiceID[$authorID]==$voiceID[$clientID]; You are not in my VC.]



$onlyIf[$voiceID[$authorID]!=; Please join my VC.]



$onlyIf[$voiceID[$clientID]!=; I'm disconnected.]



$onlyif[$queueLength!=0; Nothing is playing now in this server.]



`

    },

                  {

  name: "resume",                   

  code: `$title[1;Song Resumed :]

$description[1; Resumed Track :



**Now playing :** 

[$songInfo[title]]($songInfo[url])]

$color[1;#000001]

$footer[1;$userTag[$clientID]]

$thumbnail[1;$songInfo[thumbnail]]

$wait[1s]

$resumeTrack

$onlyIf[$voiceID[$authorID]==$voiceID[$clientID]; You are not in my VC.]

$onlyif[$djseval[client.voiceManager.manager.players.get(guild.id).options.paused;yes]==true; You can't resume a already running player.]

$onlyIf[$voiceID[$authorID]!=; Please join my VC.]



$onlyIf[$voiceID[$clientID]!=;\ I'm disconnected.]



$onlyif[$queueLength!=0; Nothing is playing now in this server.]





`

                      

   }

]

  