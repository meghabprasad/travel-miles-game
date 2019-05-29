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
var cardVal;
var sum = 0;
function generateRand(){
    randIndex = Math.floor(Math.random()*dest.names.length);
    return randIndex;
}

$(".btn").on("click", function (){
    $(".result").text("");
    $(".result").css("background-color", "blue");

    index = generateRand();
    name = dest.names[index];
    miles = dest.miles[index];
    // console.log(name);
    // console.log(miles);
    $(".randDest").text("Name: " + name + " " + "Miles: " + miles);
})
$(".card").on("hover", function(){
    $(this).fadeOut(100);
})
$(".card").on("click", function(){ //if one of the cards are clicked
    cardVal = parseInt($(this).attr("value"));
    sum = sum + cardVal;
    if (sum < miles){
        console.log(sum);
        $(".result").text(sum); //update result
    }
    else if (sum > miles){
        sum = 0;
        $(".result").text("You went too far! Try a new destination!");
        $(".result").css("background-color", "red");
    }
    else if (sum === miles){
        sum = 0;
        $(".result").text("You made it to your destination! Have a great time in " + name + "!");
        $(".result").css("background-color", "#1bb01b");
    }    
})

})