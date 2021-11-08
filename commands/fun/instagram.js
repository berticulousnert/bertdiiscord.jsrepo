module.exports = {
  name: "ig",
  code: `$title[Instagram info] 
  $description[1; Username: $jsonRequest[https://api.popcat.xyz/instagram?user=$message;username;API endpoint is currently unavaliable]

   Full name: $jsonRequest[https://api.popcat.xyz/instagram?user=$message;full_name;API endpoint is currently unavaliable]

  biography: $jsonRequest[https://api.popcat.xyz/instagram?user=$message;biography;API endpoint is currently unavaliable]

  Posts: $jsonRequest[https://api.popcat.xyz/instagram?user=$message;posts;API endpoint is currently unavaliable]

   Reels: $jsonRequest[https://api.popcat.xyz/instagram?user=$message;reels;API endpoint is currently unavaliable]

    Followers: $jsonRequest[https://api.popcat.xyz/instagram?user=$message;followers;API endpoint is currently unavaliable]

     Following: $jsonRequest[https://api.popcat.xyz/instagram?user=$message;following;API endpoint is currently unavaliable]

      Private: $jsonRequest[https://api.popcat.xyz/instagram?user=$message;private;API endpoint is currently unavaliable]

      Verified:  $jsonRequest[https://api.popcat.xyz/instagram?user=$message;verified;API endpoint is currently unavaliable]

        $thumbnail[1;$jsonRequest[https://api.popcat.xyz/instagram?user=$message;profile_pic;API endpoint is currently unavaliable]]]
        
        $color[1;RANDOM] $argsCheck[1;Send a instagram username]`
}