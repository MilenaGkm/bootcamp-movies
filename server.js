const express = require('express')
const path = require('path')
const urllib = require('urllib')



const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


app.get('/sanity', function(req, res) {
    res.send("OK")
})

app.get('/movies/:title', function(req, res) {
	const movieName = req.params.title;
	urllib.request(`http://www.omdbapi.com/?apikey=a2e2ca53&t=${movieName}`, function(err,response) {
		const movieData = JSON.parse(response.toString());
		res.send(movieData);
	})
})


const port = 8080
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})