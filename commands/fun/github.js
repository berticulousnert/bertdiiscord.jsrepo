module.exports = {
    name: "github",
    code: `$image[$jsonRequest[https://api.popcat.xyz/github/$message;avatar;API endpoint down.]]
    Name: $jsonRequest[https://api.popcat.xyz/github/$message;name;API endpoint down.]
     Account type: $jsonRequest[https://api.popcat.xyz/github/$message;account_type;API endpoint down.]
    Bio: $jsonRequest[https://api.popcat.xyz/github/$message;bio;API endpoint down.]
    Followers: $jsonRequest[https://api.popcat.xyz/github/$message;followers;API endpoint down.]
    Following: $jsonRequest[https://api.popcat.xyz/github/$message;following;API endpoint down.]
    Created: $jsonRequest[https://api.popcat.xyz/github/$message;created_at;API endpoint down.]
    Last Updated: $jsonRequest[https://api.popcat.xyz/github/$message;updated_at;API endpoint down.]`
}