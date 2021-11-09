module.exports = ({
code: `  
$description[1;
\`\`\`Bot Status-
▪︎ Ping: $ping ms
▪︎ RAM Usage: $ram MB
▪︎ Memory Usage: $djsEval[process.memoryUsage().rss / 1024 / 1024;yes] MB

CPU Info-
▪︎ CPU Usage: $cpu%
▪︎ CPU Model: $djsEval[require ('os').cpus()[0].model;yes]
▪︎ CPU Platform: $djsEval[require ('os').platform();yes]

Package Info-
▪︎ Aoi.js: v5.0.1
▪︎ Node.js: $nodeVersion\`\`\`

$footer[1;Last updated at]
$color[1;#5865F2]
$title[1;The bert Bot Status]
$addtimeStamp;$channelID] $onlyIf[$getUserVar[command;$commandName]!=disabled;Command disabled]
`,
channel: "884959026784378928",
executeOnStartup: true,
every: 100000,
type: 'loopCommand'
})