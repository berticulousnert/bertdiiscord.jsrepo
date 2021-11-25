module.exports = {
 name: "blacklist",
 code:`$blacklist[globalUser;$findUser[$message;no]]
$setVar[bl;$getvar[bl]/$findUser[$message;no]
**$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]] you are blacklisted now**
$onlyForIDs[$botownerid;ID 1;(OPTINAL) ID 2;**⛔ Only the owner can use this command**]`
}