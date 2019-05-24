// create button for generate random Destination and miles 
// when button is clicked displays the miles to that destination and the destination
// create buttons for 4 transportation options (walk, bike, drive, fly)
$(document).ready(function() {
var dest = {
    names: ["Lake Tahoe", "Napa", "Santa Cruz", "LA"],
    miles: [202, 48, 74, 381]
}
var destName;
var destMiles;
var randIndex;

var name;
var miles;
var index;
function generateRand(){
    randIndex = Math.floor(Math.random()*dest.names.length);
    return randIndex;
}

$(".btn").on("click", function (){
    index = generateRand();
    name = dest.names[index];
    miles = dest.miles[index];
    // console.log(name);
    // console.log(miles);
    $(".randDest").text("Name: " + name + " " + "Miles: " + miles);
})

$(".card").on("click", function(){
    $("")
})

})