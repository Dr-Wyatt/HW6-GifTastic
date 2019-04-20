var topic = ["Chelsea", "Liverpool", "FC Barcelona", "Manchester City", "Bayern Munich"];

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
                var p = $("<p>");
                p.text(results[j].rating);
                var teamImage = $("<img>");
                teamImage.attr("src", results[j].images.fixed_height.url);
                teamDiv.append(p);
                teamDiv.append(teamImage);
                $("#gifs-view").prepend(teamDiv);
            }
      });
}

function renderButtons() {
    $("#buttons-view").empty();
      for (var i = 0; i < topic.length; i++) {
      var a = $("<button>");
        a.addClass("team");
        a.attr("data-name", topic[i]);
        a.text(topic[i]);
        $("#buttons-view").append(a);
    }
  }
$("#add-button").on("click", function(event) {
    event.preventDefault();
    var soccerTeam = $("#button-input").val().trim();
    topic.push(soccerTeam);
    renderButtons();
  });

  $(document).on("click", ".team", displayGifs);

renderButtons();