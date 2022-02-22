module.exports = ({
  name: "facts",
  code: `$interactionReply[https://api.popcat.xyz/facts?text=$message[1]] $argsCheck[1;Please say a word]`
})