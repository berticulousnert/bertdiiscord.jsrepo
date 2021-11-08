module.exports = ({
    name: "leave",
    aliases: ['dc'],
    code: `Successfully disconnected from <#$voiceid[$clientid]>
    $lavalinkExecute[disconnect]
    $leaveVC
    $onlyif[$authorID==$botOwnerID;Command disabled until further noticed.]
    $onlyif[$voiceid[$clientid]!=;I am not connected to any Voice Channel.]
    $onlyIf[$voiceid[$authorid]!=; Please join a Voice Channel and use this command.]`
})