module.exports = {
 name: "blacklist",
 code:`
 **$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]] you are blacklisted now**
 $blacklist[globalUser;$findUser[$message;no]]
$setVar[bl;$getVar[bl]$findUser[$message;no]
$onlyForIDs[$botownerid;**⛔ Only the owner can use this command**]`
}