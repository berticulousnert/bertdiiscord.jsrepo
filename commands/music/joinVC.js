module.exports = ({
    name: "join",
    aliases: ['connect'],
    code: `
  Successfully joined <#$voiceid[$authorid]>
  $lavaLinkExecute[connect]
  $onlyif[$voiceid[$clientid]==;Someone is listening to songs in another Voice Channel\nEither join their Voice Channel or use this command later.]
  $onlyIf[$voiceid[$authorid]!=; Please join a Voice Channel and use this command.]
  `
  })