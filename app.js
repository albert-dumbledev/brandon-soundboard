var express = require('express');
var fs = require('fs');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
	var brandonFiles = fs.readdirSync(__dirname + "/public/brandon");
	var luiFiles = fs.readdirSync(__dirname + "/public/lui");

	var brandonSoundFiles = brandonFiles.filter(function (file) {
		return file.indexOf("mp3") != -1;
	});

	var luiSoundFiles = luiFiles.filter(function (file) {
		return file.indexOf("mp3") != -1;
	});

	console.log(brandonSoundFiles);
	console.log(luiSoundFiles);
	res.render(__dirname + "/view/index", {
		brandon: brandonSoundFiles,
		lui: luiSoundFiles
	});
});

app.listen(port, function () {
	console.log('Example app listening on port 3000!');
});