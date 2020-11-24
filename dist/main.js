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
	let movieID = $(`#${movie.data.imdbID}`).children('ul')
	let movieR = movie.data.Ratings
	
	for(let i = 0; i < movieR.length; i++){
		movieID.append(`<li>${movieR[i].Source} : ${movieR[i].Value}</li>`);
	}
}