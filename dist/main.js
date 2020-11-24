const renderData = new Renderer()


const fetchMovieBtn = function() {
	let input = $('#movie-input').val();

	$.get(`movies/${input}`, function(movieData) {
		renderData.renderMovie(movieData)
	});
};

Handlebars.registerHelper('clickHelper', function(movie) {
	return JSON.stringify(movie);
});

const onMovieClick = movie => {
	
};