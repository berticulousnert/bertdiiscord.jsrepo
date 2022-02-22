module.exports = {
    name: "clown",
    code: `$interactionReply[https://api.popcat.xyz/clown?image=$replaceText[$userAvatar[$findUser[$message[1]]];.webp;.png]]
`
}