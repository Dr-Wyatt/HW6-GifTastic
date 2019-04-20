var topic = ["Chelsea FC", "Liverpool", "FC Barcelona", "Manchester City", "Bayern Munich"];

function displayGifs (){
    var teamName = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        teamName + "&api_key=M6iVyE1E7bYYuMys8lvE0QI49LoKkuse&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
        console.log(response);
        var results = response.data;
        for (var j = 0; j < results.length; j++) {
                var teamDiv = $("<div>");
                teamDiv.addClass("float-left m-1");
                var p = $("<p>");
                p.text(results[j].rating);
                var teamImage = $("<img>");
                teamImage.addClass("teamName");
                teamImage.attr("src", results[j].images.fixed_height_still.url);
                teamImage.attr("data-state", "still");
                teamImage.attr("data-animate", results[j].images.fixed_height.url);
                teamImage.attr("data-still", results[j].images.fixed_height_still.url);
                teamDiv.append(p);
                teamDiv.append(teamImage);
                $("#gifs-view").prepend(teamDiv);
            }
        $(".teamName").on("click", function() {
            var state = $(this).attr("data-state");
            console.log(state);
                if (state == "still"){
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
            }else if(state == "animate") {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
            }
        });
      });
}

function renderButtons() {
    $("#buttons-view").empty();
      for (var i = 0; i < topic.length; i++) {
      var a = $("<button>");
        a.addClass("team");
        a.addClass("m-1");
        a.addClass("btn btn-secondary");
        a.attr("data-name", topic[i]);
        a.text(topic[i]);
        $("#buttons-view").append(a);
    }
  };

$("#add-button").on("click", function(event) {
    event.preventDefault();
    var soccerTeam = $("#button-input").val().trim();
    topic.push(soccerTeam);
    renderButtons();
  });

$(document).on("click", ".team", displayGifs);

renderButtons();