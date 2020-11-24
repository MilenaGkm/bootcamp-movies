class Renderer {
	
	renderMovie(data){
		const source = $("#movie-template").html();
		const template = Handlebars.compile(source);
		const newHTML = template({data});
		$('.movie-container').append(newHTML);

	}
}
