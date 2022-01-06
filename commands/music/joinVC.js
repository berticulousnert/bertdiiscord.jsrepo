module.exports = ({
    name: "join",
    aliases: ['connect'],
    code: `   $onlyif[$voiceid[$clientid]==;Someone is listening to songs in another Voice Channel\nEither join their Voice Channel or use this command later.]
     $onlyif[$voiceid[$clientid]==;Someone is listening to songs in another Voice Channel\nEither join their Voice Channel or use this command later.] $suppressErrors[Connection Error] 
  Successfully joined <#$voiceid[$authorid]>
  $lavaLinkExecute[connect]
  `
  })