$(document).ready(function(){
    obtenerMovies();
    $(".informacion").css('opacity', '0');
});

function mostrarInfo(id){
    tag = "#i"+id
    console.log(tag)
    $("tag").css('opacity', '1');
}

function ocultarInfo(){
    $(".informacion").css('opacity', '0');
}

function obtenerMovies(){
    $.ajax({
        method: 'GET',
        url: 'https://api.movie.com.uy/api/shows/rss/data',
        crossDomains: true,
        dataType: 'json',
        success: function(data){
            var id=0;
            data.contentCinemaShows.forEach(element => {
                var cinemaShows = ''

                element.cinemaShows.forEach(c => {
                    var shows=''

                    c.shows.forEach(s => {
                        shows=shows+"\
                            <p>Fecha: "+s.timeToDisplay+"<br>\
                                Tipo: "+s.formatLang+"<br>\
                                Salón: "+s.screenName+"<br>\
                            </p>\
                            "
                    })

                    cinemaShows=cinemaShows+"\
                        <h3>Cinema: "+c.cinema+"</h3>\
                        <div class=shows>"+shows+"</div>\
                        "
                })

                $("#cuerpo").append(
                    "<div id='d"+id+"' class='pelicula' onclick='mostrarInfo("+id+")'>\
                    <img src="+element.posterURL+"></img>\
                        <div id ='i"+id+"' class='informacion'>\
                            <h1>"+element.movie+"</h1>\
                            <button class='close' onclick='ocultarInfo()'>x</button>\
                            <p class='descripcion'><strong>Descripcion:</strong> "+element.description+"<br></p>\
                            <p class='genero'><strong>Genero: </strong>"+element.genre+"</p>\
                            <a class='trailer' href="+element.trailerURL+">Link to Trailer.</a>\
                            <div class='listadoShows'>\
                                <h2>Available Shows:</h2>\
                                <div>"+cinemaShows+"</div>\
                            </div>\
                        </div>\
                    </div>"
                );
                id=id+1;
            });
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert(textStatus);
        }
    });
}