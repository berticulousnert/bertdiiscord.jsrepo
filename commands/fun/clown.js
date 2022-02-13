module.exports = {
    name: "clown",
    code: `https://api.popcat.xyz/clown?image=$replaceText[$userAvatar[$findUser[$message[1]]];.webp;.png]
$onlyif[1==2;Command disabled]`
}