module.exports = {
  name: "$alwaysExecute",
  code: `
 $djsEval[
const { google } = require('googleapis');

API_KEY = process.env.gtk;
DISCOVERY_URL =
    'https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1';
let limit = 80

google.discoverAPI(DISCOVERY_URL)
    .then(client => {
        const analyzeRequest = {
            comment: {
                text: '$message',
            },
            requestedAttributes: {
                TOXICITY: {},
            },
        };

        client.comments.analyze(
            {
                key: API_KEY,
                resource: analyzeRequest,
            },
            (err, response) => {
                if (err) return d.aoiError.fnError(d, 'custom', {}, 'An Error occured: ' + err);
                let v = Math.round(response.data.attributeScores.TOXICITY.summaryScore.value * 100)
                if (v > (limit - 1)) {
                    message.reply({ content: \`Deleting...\n**Reason**: Toxicity is over \${limit}% (\${v}%)\` }).then((m) => {
                        message.delete()
                        m.edit({ content: \`**Deleted!**\n**Reason**: Toxicity is over \${limit}% (\${v}%)\` })
                    })
                }
            })
    })
    .catch(err => {
        d.aoiError.fnError(d, 'custom', {}, 'An Error occured: ' + err)
    })
  $suppressErrors

$onlyIf[$getServerVar[toxic]==true;]
  `
}

//bozo