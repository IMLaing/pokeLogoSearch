//need to find the pattern
// ex: pokeAPI if you put number at end of URL you will get pokeData
// http://pokeapi.co/api/v2/pokemon/ 1-100
// can push this url through a stream writer which will push the data in to a file
// make a program that will create a single image element per sprite
var reDown = [141
];

//request was installed
var request = require('request');
//fs = file system comes with node
var fs = require('fs');

var baseURL = 'http://pokeapi.co/api/v2/pokemon/';
	reDown.forEach( function(number){
		request(baseURL + number).pipe(fs.createWriteStream('pokemon/' + number + '.json'));
	});
		

/*
This works to pull all data
var baseURL = 'http://pokeapi.co/api/v2/pokemon/';
	for (i = 1 ; i <= 151 ; i++){
		console.log(baseURL + i);
		request(baseURL+i).pipe(fs.createWriteStream('pokemon/'+ i + '.json'));
	}
*/