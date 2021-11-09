module.exports = {
 name: "redeem", 
 code:  `$author[$username[$authorID]#$discriminator[$authorID];$authorAvatar]
 $description[** Success:** <@$authorID> You've claimed premium perks for 1 month]
 $color[GREEN]
$setUserVar[premium;true;$authorID]
$setTimeout[30d;
userID: $authorID]
$onlyIf[$getUserVar[premium;$authorID]==false;**⛔ You have already redeemed your perk**]
 $onlyForServers[884959026138452008;893645609679089674;821998081691746304;768927312178577449;{description:**⛔ This command can be only used in a premium server**}{color:RED}] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]
 `
}
