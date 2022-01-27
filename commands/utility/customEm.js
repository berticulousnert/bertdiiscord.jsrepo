module.exports = ({
 name: 'embedcreate',
 aliases: 'embed',
 code: `
$djsEval[
const simplydjs = require('simply-djs')
simplydjs.embedCreate(message, {
embedFoot: '$usertag[$authorID] Embed Creator',
credit: false,
})
]
$onlyperms[admin;You must have admin to use this command]
`
})
