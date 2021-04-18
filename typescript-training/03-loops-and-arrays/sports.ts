let sportsOne: string[] = ["Golf","Cricket","Hockey","Soccer"];


//Simplified For loop below
for ( let tempSport of sportsOne) {

    if (tempSport == "Hockey"){
        console.log(tempSport + " << Favourite sport!");
    } 
    else {
        console.log(tempSport);
    }
}