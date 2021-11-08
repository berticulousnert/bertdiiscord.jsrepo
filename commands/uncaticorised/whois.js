bot.command({
    name: "whois",
    aliases: ['i', 'userinfo', 'user'],
    code: `
    $onlyIf[$guildID!=;]
    $title[$username[$findUser[$message;yes]]'s info]
    $description[<@$findUser[$message;yes]>]
    $addField[Creation Date;$creationDate[$findUser[$message;yes]]
    (\`$creationDate[$findUser[$message;yes];time]\`)]
    $addField[Join Date;$memberJoinedDate[$findUser[$message;yes]]
    (\`$memberJoinedDate[$findUser[$message;yes];time]\`)]
    $addField[DM Status;$replaceText[$replaceText[$isUserDMEnabled[$findUser[$message;yes]];true;Open];false;Close]]
    $addField[Platform;$platform[$findUser[$message]]]
    $addField[Activity;$activity[$findUser[$message]]]
    $addField[Status;$status[$findUser[$message]]]
    $addField[Custom Status;$getCustomStatus[$findUser[$message]];state]
    $addField[Badges;$getUserBadges[$findUser[$message]]]
    $addField[Bot;$isBot[$findUser[$message;yes]]]
    $addField[ID;$findUser[$message;yes]]
    $addField[Discriminator;#$discriminator[$findUser[$message;yes]]]
    $addField[Username;$username[$findUser[$message;yes]]
    (Nickname: \`$nickname[$findUser[$message;yes]]\`)]
    $footer[Requested by $username[$authorID]]
    $color[$getRoleColor[$highestRole[$findUser[$message]]]]
    $botTyping
    `
})