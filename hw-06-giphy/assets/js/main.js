$(document).ready(function(){
    // retrieve stored data (JSON stringified) and convert
    var storedData = localStorage.getItem("list_data_key");
    
    var searchArray = [];
    
    if (storedData) {
        searchArray = JSON.parse(storedData);
    } 
        console.log(storedData);

    function fmakebutton(term){
        var makeButton = $("<button>");
        // Adding a class
        makeButton.addClass("btn btn-primary mx-1 search-me");
        // Adding a data-attribute with a value of the search term at index i
        makeButton.attr("data-name", term);
        // Providing the button's text with a value of the search term at index i
        makeButton.text(term);
        // Adding the button to the HTML
        $("#added-buttons").append(makeButton);
    } 

        for (i = 0; i < searchArray.length; i++){
            fmakebutton(searchArray[i]);
        }

    //[onSubmit]Capture User input from text box
    $("form").on("submit", function(event) {
        event.preventDefault();
        
        var searchTerm = $("#search-bar").val().trim();
        // enter captured text in an array
        searchArray.push(searchTerm);
            console.log(searchTerm);
        
        // store array in localstorage
        localStorage.setItem("list_data_key",  JSON.stringify(searchArray));
        
        fmakebutton(searchTerm);
        $("#search-bar").attr("value", "");


    });
    // --[onSumbit]Capture Search Text

    //Clear Button empties local storage
    $("#clear-button").click( function(){ 
        localStorage.clear();
        searchArray = JSON.parse(storedData);
        location.reload();
        
    }); 
    
        
    // read array from local storage
    
// populate buttons from array
// loop through the array, creating a button for each item
$(".search-me").on("click", function() {
    // Grabbing and storing the data-name property value from the button
    var searchTerm = $(this).attr("data-name");
    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      searchTerm + "&api_key=dc6zaTOxFJmzC&limit=10";

    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After data comes back from the request
      .then(function(response) {
        console.log(queryURL);

        console.log(response);
        // storing the data from the AJAX request in the results variable
        var results = response.data;

        // Looping through each result item
        for (var i = 0; i < results.length; i++) {

          // Creating and storing a div tag
          var gifDiv = $("<div>");

          // Creating and storing an image tag
          var newImage = $("<img>");
          // Setting the src attribute of the image to a property pulled off the result item
          newImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and image tag to the gifDiv
          gifDiv.append(newImage);

          // Prependng the gifDiv to the HTML page in the "#display-gifs" div
          $("#display-gifs").prepend(gifDiv);
        }  
})
});



}); //--[document.ready]

// connect search functionality to buttons