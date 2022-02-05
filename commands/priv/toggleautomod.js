module.exports = {
  name: "toggle-toxic",
  $if: "v4",
  code: `
$if[$getServerVar[toxic]==false]
Enabled toxic automod!
$setServerVar[toxic;true]
$else
Disabled toxic automod!
$setServerVar[toxic;false]
$endif`
}