$('button').on('click',function(){
	$( ".container" ).children("h2").remove() //OR $('.container').empty();
	$( ".container" ).children("img").remove() // OR $('.container').empty();

	$inputValue = $('input').val()
	var options = {
		url: 'http://www.omdbapi.com/?apikey=2f6435d9&s=' + $inputValue
	};	
	
	$.ajax(options).done(function(response){	
			
	   response.Search.forEach(function(movie){

	   		$( ".container" ).append('<h2><a target="_blank" href="http://www.imdb.com/title/' + 
	   			movie.imdbID + '/?ref_=fn_al_tt_1">' + movie.Title + '</a></h2>'); 
			
			$( ".container" ).append('<img src= ' + movie.Poster + '>');
		})

	   	$('.container').on('click', 'img', function(){
	   		console.log("you've clicked this poster")
	   	})

	})
})

