module.exports = ({
  name: "facts",
  code: `https://api.popcat.xyz/facts?text=$message[1] $onlyif[1==2;Command disabled]`
})