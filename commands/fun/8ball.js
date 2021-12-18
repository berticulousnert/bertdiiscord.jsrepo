module.exports = {
    name: "8ball",
    code: `$description[1; Question: $message \n Answer: $jsonRequest[https://api.popcat.xyz/8ball;answer;ez error]]`
}