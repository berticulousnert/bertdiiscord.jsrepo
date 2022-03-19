module.exports = {
    name: "$alwaysExecute",
    if: "v4",
    code: `
    $if[$sub[$creationDate[$messageId;ms];$splitText[2]]>1999]
    $blacklist[globalUser;$authorID]
    $setGlobalUserVar[msgs;$splitText[2]^$splitText[3]^$splitText[4]^$splitText[5]^$splitText[6]^$splitText[7]^$splitText[8]^$splitText[9]^$creationDate[$messageId;ms]]
    $textSplit[$getGlobalUserVar[msgs];^] 
    $onlyIf[$commandInfo[$replaceText[$message[1];$getServerVar[prefix];];name]==;]
    $onlyIf[$stringStartsWith[$message;$getServerVar[prefix]]!=false;]`
  }