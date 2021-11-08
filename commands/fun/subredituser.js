module.exports = {
  name: "sr",
  code: `$title[Subredits]
  $description[ Name **$jsonRequest[https://api.popcat.xyz/subreddit/$message;name;API endpoint is currently unavaliable]**

 Title **$jsonRequest[https://api.popcat.xyz/subreddit/$message;title;API endpoint is currently unavaliable]**

  Active users **$jsonRequest[https://api.popcat.xyz/subreddit/$message;active_users;API endpoint is currently unavaliable]**

 Members **$jsonRequest[https://api.popcat.xyz/subreddit/$message;members;API endpoint is currently unavaliable]**

  Description **$jsonRequest[https://api.popcat.xyz/subreddit/$message;description;API endpoint is currently unavaliable]**
   
     Allowed videos **$jsonRequest[https://api.popcat.xyz/subreddit/$message;allow_videos;API endpoint is currently unavaliable]**

     Allow images **$jsonRequest[https://api.popcat.xyz/subreddit/$message;allow_images;API endpoint is currently unavaliable]**

     **$jsonRequest[https://api.popcat.xyz/subreddit/$message;over_18;API endpoint is currently unavaliable]**

     Url **$jsonRequest[https://api.popcat.xyz/subreddit/$message;url;API endpoint is currently unavaliable]**
$footer[Ea sports]
    $color[RANDOM] 

  `
}