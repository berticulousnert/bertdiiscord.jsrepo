module.exports = {
    name: "8ball",
    code: ` $onlyif[$message!=;Please ask a question] $description[1; Question: $message \n 🎱 Answer: $jsonRequest[https://api.popcat.xyz/8ball;answer;Error]] $onlyif[1==2;Command disabled]`
}