module.exports = {
  name: "ttt",
  code: `$djseval[( async () => {const opponent = message.mentions.users.first();
const { TicTacToe } = require('weky')
const game = new TicTacToe({
 message: message,
 opponent: opponent,
 xColor: 'red',
 oColor: 'blurple',
 xEmoji: '❌',
 oEmoji: '0️⃣' ,
})
game.start()})();yes]
$onlyif[$mentioned[1]!=;{newEmbed: {description:Mention someone to play against!}{color:FF0000}]}
 `
}
