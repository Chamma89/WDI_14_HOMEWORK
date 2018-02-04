var counter = 0;

// Button which initiates the gettingGiph Function.
$('button').on('click',function(){
	$('.container').empty()
	gettingGiph();
})

// Scroll Mechanism.
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       gettingGiph()
   }
});


function gettingGiph (x){
	counter += 5

	$inputValue = $('input').val()
	var options = {
		url: 'http://api.giphy.com/v1/gifs/search?q='+ $inputValue +' &api_key=8IwNqledgb8xU23WB4Pc2qiTKAWC0eDy&limit='+ (5) +'&offset=' + counter
	};	
	
	$.ajax(options).done(function(result){	
			
	   result.data.forEach(function(giphy){
	   	$( ".container" ).append('<img src=' + giphy.images.original.url + '>');
		})

	})
}

/*API KEY = 8IwNqledgb8xU23WB4Pc2qiTKAWC0eDy*/