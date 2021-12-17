/*module.exports = [
{
 name : 'selectMenu',
 code : `
$title[1;selectMenu]
$description[1;A [Select Menu](https://www.youtube.com/watch?v=5nWsceRG4TI 'click') Example]
$color[1;RANDOM]
$addSelectMenu[1;menu_$authorId;Select An Option;1;1;no;option 1:this is option 1:opt1;option 2:this is option 2:opt2]
`
},
{
 type : 'interaction',
 prototype : 'selectMenu',
 code : `
$djsEval[console.log(d.data.interaction.values)]
$interactionReply[;$nonEscape[$if[$interactionData[values[0]]==opt1;{newEmbed:{title:Selected}{description:you selected option 1}{color:RANDOM}{footer:$usertag[$interactionData[author.id]] used this:$useravatar[$interactionData[author.id]]}};{newEmbed:{title:Selected}{description:you selected option 2}{color:RANDOM}{footer:$usertag[$interactionData[author.id]] used this:$useravatar[$interactionData[author.id]]}}]]]
    $onlyIf[$interactionData[customId]==menu_$interactionData[author.id];]
    $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
    "content" : " ",
    "embeds" : "{newEmbed:{title:Error}{description:You Are not the Author Of this button}{color:RED}}",
    "ephemeral" : true,
    "options" : {
        "interaction" : true
    }
}]
`
}
]*/