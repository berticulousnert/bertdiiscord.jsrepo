module.exports = ({
code: `  
$description[
\`\`\`Bot Status-
▪︎ Ping: $ping ms
▪︎ RAM Usage: $ram MB
▪︎ Memory Usage: $djsEval[process.memoryUsage().rss / 1024 / 1024;yes] MB

CPU Info-
▪︎ CPU Usage: $cpu%
▪︎ CPU Model: $djsEval[require ('os').cpus()[0].model;yes]
▪︎ CPU Platform: $djsEval[require ('os').platform();yes]

Package Info-
▪︎ Aoi.js: v4.5.0
▪︎ Node.js: $nodeVersion\`\`\`

$footer[Last updated at]
$color[#5865F2]
$title[The bert Bot Status]
$addtimeStamp;$channelID] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]
`,
channel: "884959026784378928",
executeOnStartup: true,
every: 100000,
type: 'loopCommand'
})