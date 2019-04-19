var topic = ["Chelsea", "Liverpool", "FC Barcelona", "Manchester City", "Bayern Munich"];

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

//   $(document).on("click", ".team", displayGifs);

renderButtons();