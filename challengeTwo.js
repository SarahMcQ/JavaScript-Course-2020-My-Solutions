// CODING CHALLENGE 2

// John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120, and 103 points,

// while, Mike's team scored 116, 94, and 123 points.

// 3. Change the scores to show different winners 

// 4. Mary also plays basketball and her team scored 97, 134, and 105 points. 

 

if (JohnsTeam > MikesTeam && JohnsTeam > MarysTeam) {

    console.log("John's team has the highest score with " + JohnsTeam + " points!");

} else if (MikesTeam > JohnsTeam && MikesTeam > MarysTeam) {

    console.log("Mike's team has the highest score with " + MikesTeam + " points!");

} else if (MarysTeam > JohnsTeam && MarysTeam > MikesTeam){

    console.log("Mary's team has the highest score with " + MarysTeam + " points!");

} else if (MikesTeam === JohnsTeam && MikesTeam === MarysTeam ) {

    console.log("It's a tie!");

};