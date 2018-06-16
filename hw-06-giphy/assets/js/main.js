$(document).ready();

//Capture User input from text box

$("#submit").on("click", function(event) {
    event.preventDefault();
    
    // var searchTerm = $("#search-bar").val().trim();
    
    alert("searchTerm");
});

console.log("searchTerm");

// --Capture Text


// enter captured text in an array

// store array in local storage

// read array from local storage

// populate buttons from array
var searchArray = ["bike","car","plane","John Cena","frog","rabbit","tea","Optimus Prime"];

    // loop through the array, creating a button for each item
for (i = 0; i < searchArray.length; i++){
    console.log(searchArray[i]);

    var makeButton = $("<btn>");
    // Adding a class
    makeButton.addClass("btn-primary");
    // Adding a data-attribute with a value of the search term at index i
    makeButton.attr("data-name", searchArray[i]);
    // Providing the button's text with a value of the search term at index i
    makeButton.text(searchArray[i]);
    // Adding the button to the HTML
    $("#added-buttons").append(makeButton);


}


// connect search functionality to buttons