  module.exports = {
  type: 'joinCommand',
  channel: "$getServerVar[setwelcome]",
  code: `$title[Welcome $username $getServerVar[jt]]
  $description[$getServerVar[jd]]
  $footer[$getServerVar[jf]]
  $color[$getServerVar[jc]]
  $thumbnail[$authorAvatar]
  $onlyif[$guildID!=768927312178577449;]
$onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]

  `
} 