

jQuery(function() {

    getData("Dave Matthews");

    function getData(track) {
        $.ajax({
            url: `https://api.soundcloud.com/tracks/?q=${track}&client_id=03e4633e2d85874a921380e47cac705d`,
            success: function(response) {
                console.log(response);
                response.forEach(function(music) {
                    $('#musicapp').append(`
                <div class="drake col-md-2">
                  <img src="${music.artwork_url}" class="prince">
                  <h4 class="jackson">${music.title}</h4>
                  <button class="btn btn-primary" data-id="${music.id}" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Play Track</button> 
                </div> 
                       
              `);
                })
            }
        })
    }

    $('form').on("submit", function(day) {

        day.preventDefault();
        var input = $('input').val();
        $("#musicapp").html("");
        getData(input);
    })

    $("body").on('click', ".btn", function() {
        $('.collapse').toggleClass('collapse')
        var id = $(this).data("id");
        $('#playsong').attr(`src`, `http://api.soundcloud.com/tracks/${id}/stream?client_id=03e4633e2d85874a921380e47cac705d`)
    })
});
