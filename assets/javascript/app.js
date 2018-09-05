var topics=["Cessna","F-14"]

function renderButtons() {


    $("#airplaneButtons").empty()

    for(var i=0; i<topics.length; i++)
        {
        //     var s = td.text();
        //     if (x == '\xa0') { // Non-breakable space is char 0xa0 (160 dec)
        //     x = '';
        // }   
            var $b = $("<button>");
            //Add the class to the button
            $b.addClass(".aircraft");
            //Add a data attribute with the value of the aircraft at index i
            $b.attr("data-name",topics[i]);
            //Providing the buttons text with the value of the aircraft at index i
            $b.text(topics[i]);
            //This will add the button to my html under the div I named as an id of airplaneButtons
            $("#airplaneButtons").append($b).innerHTML($s)
        }
}

renderButtons();
