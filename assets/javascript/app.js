var topics=["Cessna","F-14"];


$("#airplaneButtons").on('click', function(){

    var aircraft = $(this).attr("data-name");
    
    var queryURL = "https://api.giphy.com/GET/v1/gifs/search?api_key=3CYKBkbY2Z6k94oEvOxFIYwZEMGDc2JV&q="+aircraft+"&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(response){

        var imgUrl='response.data.image_original_url';

        var $aircraftImage = $("<img>");

      // Setting the aircraftImage src attribute to imageUrl
        $aircraftImage.attr("src", imgUrl);
        $aircraftImage.attr("alt", "aircraft image");

        //Prepend the aircraftImage to the airplanes div
        $("#airplanes").prepend($aircraftImage);

    })
});

function renderButtons() {


    $("#airplaneButtons").empty()

    for(var i=0; i<topics.length; i++)
        {
            var $b = $("<button>");
            //Add the class to the button
            $b.addClass(".aircraft");
            //Add a data attribute with the value of the aircraft at index i
            $b.attr("data-name",topics[i]);
            //Providing the buttons text with the value of the aircraft at index i
            $b.text(topics[i]);
            //This will add the button to my html under the div I named as an id of airplaneButtons
            $("#airplaneButtons").append($b);
        }
}

$("#addAircraft").on("click", function(event){

    //this prevent form from tryingn to submit itself and so the user can press enter if chooses not to hit submit button
    event.preventDefault();

    //grabs text from input box
    var aircraft = $("#airplane-input").val().trim();

    //now the aircraft will now be added to our array of buttons
    topics.push(aircraft);

    // //call the render button now to process the movie array
    renderButtons();
});

// $(document).on("click", ".aircraft", displayMovieInfo);

renderButtons();

