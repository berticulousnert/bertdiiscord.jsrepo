module.exports = ({
name:"rank",
aliases:"level",
code:`$if[$message==]
$author[1;Rank of $usertag[$get[user]];$authoravatar]
$image[1;https://vacefron.nl/api/rankcard?username=$replaceText[$username[$get[user]]; ;+;-1]&avatar=$userAvatar[$get[user]]?size=4096&level=$getUserVar[rank;$get[user]]&rank=&currentxp=$getUserVar[exp;$get[user]]&nextlevelxp=$getUserVar[req;$get[user]]&previouslevelxp=0&custombg=$getUserVar[level_card]&xpcolor=00FF00&isboosting=false]
$color[1;RANDOM]
$addtimestamp
$let[user;$authorid]
$else
$suppresserrors
$addtimestamp
$color[1;RANDOM]
$author[1;Rank of $usertag[$get[user]];$authoravatar]
$image[1;https://vacefron.nl/api/rankcard?username=$replaceText[$username[$get[user]]; ;+;-1]&avatar=$userAvatar[$get[user]]?size=4096&level=$getUserVar[rank;$get[user]]&rank=&currentxp=$getUserVar[exp;$get[user]]&nextlevelxp=$getUserVar[req;$get[user]]&previouslevelxp=0&custombg=$getUserVar[level_card]&xpcolor=#00FF00&isboosting=false]
$let[user;$replacetext[$replacetext[$checkcondition[$findMember[$djseval[message.guild.members.fetch().then(a => a.find(x =>x.user.username.toLowerCase().includes('$message'.toLowerCase())).user.id);yes];no]==undefined];true;$findmember[$message;yes]];false;$findMember[$djseval[message.guild.members.fetch().then(a => a.find(x =>x.user.username.toLowerCase().includes('$message'.toLowerCase())).user.id);yes];no]]]
$endif
$onlyif[$getservervar[levelling]==true;The levelling system is disabled!] $onlyIf[$isBot[$mentioned[1;yes]]==false;You can't mention a bot!] $suppresserrors`
})