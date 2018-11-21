//When the page loads, grab and display al of our chirps
$.get("api/all", function (data) {

    if (data.length !== 0) {

        for (var i = 0; i < data.length; i++) {
            var row = $("<div>");
            row.addClass("chirp");

            row.append("<p>" + data[i].author + "chirped.. <p>");
            row.append("<p>" + data[i].body + "</p>");
            row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd"))

            $("#chirp-area").prepend(row);

        }

    }

});

//When user chirps (clicks addBtn)

$("#chirp-submit").on("click", function (event) {
    event.preventDefault();

    //Make a new chirp object
    var newChirp = {
        author: $("#author").val().trim(),
        body: $("#chirp-box").val().trim(),
        created_at: moment().forat("YYYY-MM-DD HH:mm:ss")
    };
    console.log(newChirp);

    //Send an AJAX Post-request with jQuery 
    $.post("/api/new", newChirp)
    //On success, run the following code 
    .then(function() {

        var row = $("<div>");
        row.addClass("chirp");

        row.append("<p>" + newChirp.author + "chirped: <p>");
        row.append("<p>" + newChirp.body + "</p>");
        row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");

        $("#chirp-area").prepend(row);

    });

    $("#author").val("");
    $("#chirp-box").val("");

});