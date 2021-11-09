  module.exports = {
  type: 'joinCommand',
  channel: "$getServerVar[setwelcome]",
  code: `$title[1;Welcome $username $getServerVar[jt]]
  $description[1;$getServerVar[jd]]
  $footer[1;$getServerVar[jf]]
  $color[1;$getServerVar[jc]]
  $thumbnail[1;$authorAvatar]
  $onlyif[$guildID!=768927312178577449;]
$onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]

  `
} 