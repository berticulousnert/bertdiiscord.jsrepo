bot.command({
    name: "whois",
    aliases: ['i', 'userinfo', 'user'],
    code: `
    $onlyIf[$guildID!=;]
    $title[1;$username[$findUser[$message;yes]]'s info]
    $description[1;<@$findUser[$message;yes]>]
    $addField[1;Creation Date;$creationDate[$findUser[$message;yes]]
    (\`$creationDate[$findUser[$message;yes];time]\`)]
    $addField[1;Join Date;$memberJoinedDate[$findUser[$message;yes]]
    (\`$memberJoinedDate[$findUser[$message;yes];time]\`)]
    $addField[1;DM Status;$replaceText[$replaceText[$isUserDMEnabled[$findUser[$message;yes]];true;Open];false;Close]]
    $addField[1;Platform;$platform[$findUser[$message]]]
    $addField[1;Activity;$activity[$findUser[$message]]]
    $addField[1;Status;$status[$findUser[$message]]]
    $addField[1;Custom Status;$getCustomStatus[$findUser[$message]];state]
    $addField[1;Badges;$getUserBadges[$findUser[$message]]]
    $addField[1;Bot;$isBot[$findUser[$message;yes]]]
    $addField[1;ID;$findUser[$message;yes]]
    $addField[1;Discriminator;#$discriminator[$findUser[$message;yes]]]
    $addField[1;Username;$username[$findUser[$message;yes]]
    (Nickname: \`$nickname[$findUser[$message;yes]]\`)]
    $footer[1;Requested by $username[$authorID]]
    $color[1;$getRoleColor[$highestRole[$findUser[$message]]]]
    $botTyping
    `
})