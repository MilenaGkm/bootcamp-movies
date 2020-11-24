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
	$("ul").append(`<li>${movie.data.Ratings[0].Source} : ${movie.data.Ratings[0].Value}</li>`)
	$("ul").append(`<li>${movie.data.Ratings[1].Source} : ${movie.data.Ratings[1].Value}</li>`)
	$("ul").append(`<li>${movie.data.Ratings[2].Source} : ${movie.data.Ratings[2].Value}</li>`)
};