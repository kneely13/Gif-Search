$(document).ready(function(){

    var topics=["Cessna","F-14"]

    function renderButtons() {
    
    
        $("#airplaneButtons").empty()
   
        for(var i=0; i<topics.length; i++)
        {
                var $b = $("<button>");
                var space=" ";
               

                $("#airplaneButtons").append($b).append(space)
                //Add the class to the button
                $b.addClass(".aircraft");
                //Add a data attribute with the value of the aircraft at index i
                $b.attr("data-name",topics[i]);
                //Providing the buttons text with the value of the aircraft at index i
                $b.text(topics[i]);
                // var aircraft = $("#airplane-input").val().trim();
                // topics.push(aircraft);
                //This will add the button to my html under the div I named as an id of airplaneButtons
                $("#airplaneButtons").on('click', showGifs);
        }

    };
    
    
    function showGifs() {
        $("#airplanes").empty();
        var gif=$(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=3CYKBkbY2Z6k94oEvOxFIYwZEMGDc2JV&limit=10&rating=G";
    
        $.ajax({
            url:queryURL,
            method: "GET"
        }).then(function(response){
    
           var results = response.data;
            console.log(results);
    
            for(var j = 0; j < results.length; j++) {
                var rating= results[j].rating;
                console.log(rating);
                var aircraftImage = $("<img>");
                var showRating=$("<p>").text("Rating: " + rating);
                // var imgUrl = results[j].images.fixed_height_still.url;
                $("#airplanes").append(showRating);
                $("#airplanes").append(aircraftImage);
                aircraftImage.attr("src", results[j].images.fixed_height_small_still.url);
                aircraftImage.attr("data-still", results[j].images.fixed_height_small_still.url);
                aircraftImage.attr("data-animate", results[j].images.fixed_height_small.url);
                // aircraftImage.attr("data-name", "still");
                 
            };
        })
    };
    
    
    
    $("#addAircraft").on("click", function(event){
    
        //this prevent form from tryingn to submit itself and so the user can press enter if chooses not to hit submit button
        event.preventDefault();
    
        //grabs text from input box
        var aircraft = $("#airplane-input").val().trim();
    
        //now the aircraft will now be added to our array of buttons
        topics.push(aircraft);
    
        // //call the render button now to process the movie array
        // renderButtons();
    })
    
    
    renderButtons();
    
    $("body").on("click", "img", function() {
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
    });

});
