module.exports = {
  type: 'readyCommand',
  channel: "884959026784378928",
  code: `$log[Ready on $userTag[$clientID]]  
  $replaceText[$djseval[const TicTacToe = require('discord-tictactoe');
new TicTacToe({ language: 'en', command: '.ttt-hard' })
 .login('$clientToken')
 .then(() => console.log('TicTacToe bot is ready to be used.'));;yes];undefined;Package activated, use your custom trigger in djseval to play.]`
}