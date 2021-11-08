module.exports = ({
    name: "votecheck",
    code: `
    **Thank You For voting!** You have unlocked some cool **voter-only** features make sure to check them out!
    $onlyIf[$jsonRequest[https://normal-api.ml/topgg/hasvoted?bot=$clientID&user=$authorID&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg3Mjk4NTE1MDkwNzA4ODkyOCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjM2Mjk1OTI2fQ.8it7IW71DEaa0br9x9YTdepqDB2Eb4IuKJSSLSxZxEM;voted;Vote at https://top.gg/bot/872985150907088928]==true;You Haven't Voted Yet!]
    `
    })