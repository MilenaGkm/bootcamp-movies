const renderData = new Renderer()


const fetchMovieBtn = function() {
	let input = $('#movie-input').val();
	console.log('a');

	$.get(`movies/${input}`, function(movieData) {
		console.log(movieData);
		renderData.renderMovie(movieData)
	});
};