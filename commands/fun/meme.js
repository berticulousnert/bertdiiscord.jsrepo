module.exports = {
  name: "meme",
  code: `
  $cooldown[1s;Chill out]
  $interactionReply[$jsonrequest[https://api.popcat.xyz/meme;image;You are prob spamming the api]]
  `
}