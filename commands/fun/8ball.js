module.exports = {
    name: "8ball",
    code: ` $onlyif[$message!=;Please ask a question] $interactionReply[;{newEmbed: {description: Question: $message \n 🎱 Answer: $jsonRequest[https://api.popcat.xyz/8ball;answer;Error]}}]
`
}
