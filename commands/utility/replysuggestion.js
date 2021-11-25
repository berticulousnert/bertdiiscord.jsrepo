
module.exports = ({
  name: "reply-suggestion",
  aliases: "reply",
  description: "Reply to a suggestion.",
  usage: "reply-suggestion <suggestion number> <accept/deny> <reason>",
  code: `$editmessage[$splittext[3];{newEmbed: {author:Suggestion $replacetext[$replacetext[$message[2];accept;accepted];deny;denied]!:$useravatar[$splittext[2]]}{field:Original Suggestion:$getembed[$getservervar[suggest_channel];$splittext[3];description]:no}{field:Reason for $replacetext[$replacetext[$message[2];accept;acceptance];deny;denial] of the suggestion:$messageslice[2]}{color:$replacetext[$replacetext[$message[2];accept;GREEN];deny;FF0000]}{footer:$replacetext[$replacetext[$message[2];accept;Accepted];deny;Denied] by $usertag($authorid):$authoravatar}};$getservervar[suggest_channel]]
$senddm[$splittext[2];Your suggestion has been given a reply by $usertag!{newEmbed: {author:Your suggestion $message[1] has been $replacetext[$replacetext[$message[2];accept;accepted];deny;denied] in $servername!:$useravatar[$splittext[2]]}{description:Below are the details!}{field:Your Original Suggestion:$getembed[$getservervar[suggest_channel];$splittext[3];description]:no}{field:Reason for $replacetext[$replacetext[$message[2];accept;acceptance of the suggestion];deny;denial of the suggestion]:$messageslice[2]}{color:$replacetext[$replacetext[$message[2];accept;GREEN];deny;FF0000]}{timestamp}}]
$textsplit[$splittext[$message[1]];.]
$textsplit[$getservervar[su];/]
$deletecommand
$sendmessage[Successfully replied to the suggestion! {delete:3s};no]
$onlyif[$checkcontains[$message[2];accept;deny]==true;Use either \`accept\` or \`deny\` in place of $message[2]!]
$onlyif[$message[1]<=$getservervar[suggest_count];Only \`$getservervar[suggest_count]\` suggestions have been sent!]
$onlyif[$isnumber[$message[1]]==true;Invalid number!]
$onlyif[$message[3]!=;Invalid syntax. Try \`$getservervar[prefix]reply <suggestion #> <accept/deny> <reason>\`.]
$onlyif[$getservervar[suggest_channel]!=;The suggestions module is not yet enabled!]
$onlyperms[managechannel;You require manage channels permissions for doing this!] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]`})
//send err in dmes
//what does the error say?
//wait can u run `.eval $userPerms[$clientID]` in the support server lemme check yes i can ok
//thats too much code for me to debug
//idk why it only not work in the bert server f ok its the get embed 