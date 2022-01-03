module.exports = {
 name: "filterb",
 code: `
 $author[1;Added tremolo filter to player]
 $color[1;RANDOM]
 $lavalinkExecute[addFilters;equalizer={"band": 1.0, "gain": 0.5};volume=1] $onlyif[$authorID==$botownerID;This command is still in bet]a`
};