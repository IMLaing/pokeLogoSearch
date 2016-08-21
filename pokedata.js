var pokeData = [];
for(i=1;i<=151;i++){
	var data = require('./pokemon/' + i + '.json');
	var type2 = data.types.find(function(typeData){
		return typeData.slot == 2;
	});
	if (type2){
		type2 = type2.type.name;
	}
	pokeData.push({
		id: i,
		name: data.name,
		type1: data.types.find(function(typeData){
			return typeData.slot == 1;
		}).type.name,
		type2: type2,
		image: '/pokemon/img/'+ i +'.png',
	});
}
var fs = require('fs');
fs.writeFile('pokeData.json', JSON.stringify(pokeData));