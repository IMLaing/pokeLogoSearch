$(function(){
	var findPokemon = function(type1, type2){
		$.getJSON("pokeData.json").done(function(results){
			console.log(type1 + ' ' + type2);
			var noPokeCounter = 0;
			$('#displaySelection').empty();
			for (i=0;i<=151;i++){
				var pokeName = results[i].name;
				var checkType1 = String(results[i].type1);
				var checkType2 = results[i].type2;
				if (checkType1 == type1 && type2 == 'noSecond'){
					console.log(i + ' is matched');
					$('#displaySelection').append('<div class="pokeImg '+ type1 +'"> <h2>' + pokeName.toUpperCase() + '</h2><a href="http://bulbapedia.bulbagarden.net/wiki/'+pokeName+'_(Pok%C3%A9mon)" > <img src="pokemon/img/' + (i+1) + '.png" /> </div> </a>' );
				} else if (checkType1 == type1 && checkType2 == type2){
					$('#displaySelection').append('<div class="pokeImg '+ type1 +' '+ type2 +'2 "> <h2>' + pokeName.toUpperCase() + '</h2><a href="http://bulbapedia.bulbagarden.net/wiki/'+pokeName+'_(Pok%C3%A9mon)" > <img src="pokemon/img/' + (i+1) + '.png" /> </div>');
					console.log(i + ' is matched with both');
				} else{
					noPokeCounter++;
					if(noPokeCounter == 151){
						$('#displaySelection').append('<img src=pokemon/img/noPokemon.png >');
						console.log('no matching pokemon');
					}					
				}
			}
		});
	};
	$('#searchTypes').on('click', function(e){
		e.preventDefault();
		var type1 = $('#pokeType').val();
		var type2 = $('#pokeTypeSecondary').val();
		if(type1 == type2){
			type2 = 'noSecond';
			findPokemon(type1, type2);
		}
		findPokemon(type1, type2);
	});

/* used to test all data was being pulled
	var showAll = function(){
		$.getJSON("pokeData.json").done(function(results){
		console.log(results);
		for (i=0;i<=151;i++){
			var pokeName = results[i].name;
			var checkType1 = results[i].type1;
			var checkType2 = results[i].type2;
			if (checkType2 === undefined){
				$('#displayScreen').append('<p>' + (i+1) + ' '  + name +' is a ' + checkType1 + ' type Pokemon!' + '</p>');
			} else {
				$('#displayScreen').append('<p>' + (i+1) + ' ' + pokeName +' is a ' + checkType1 + ' and ' + checkType2 + ' type Pokemon!' + '</p>');
			}
			}
		});
	};
	$('#displayAll').on('click', function(){
		showAll();
	});
*/
});