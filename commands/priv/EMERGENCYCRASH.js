module.exports = {
  name: "ecrash",
  aliases: ["emergency", "ec"],
  description: "Crash the bot.",
  code: `
$djsEval[process.exit(0)]
$onlyForIDs[746758742871244811;Only the devoper can run this command]`
}
