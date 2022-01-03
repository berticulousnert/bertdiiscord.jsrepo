module.exports = ({
    name: "leave",
    aliases: ['dc'],
    code: `$suppressErrors[Connection Error] $lavalinkExecute[disconnect] Successfully disconnected from <#$voiceid[$clientid]>
    $onlyif[$authorID==$botOwnerID;Command disabled until further noticed.]
    $onlyif[$voiceid[$clientid]!=;I am not connected to any Voice Channel.]
    $onlyIf[$voiceid[$authorid]!=; Please join a Voice Channel and use this command.]`
})