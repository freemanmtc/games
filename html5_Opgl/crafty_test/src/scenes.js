Crafty.scene('Game',function(){
	/* array 2d de tiles ocupados */
	this.occupied = new Array(Game.map_grid.width);
	for (var i=0; i < Game.map_grid.width; i++){
		this.occupied[i]  = new Array(Game.map_grid.height);
		for(var y = 0; y < Game.map_grid.height; y++){
			this.occupied[i][y] = false;
		}
	}


	/* cria o player e coloca no x,y */
	this.player=Crafty.e('PlayerCharacter').at(5,5);
	/* ocupa o tile do player */
	this.occupied[this.player.at().x][this.player.at().y]=true;
	
	/* coloca uma arvore em cada canto do viewport */
	for(var x=0; x < Game.map_grid.width; x++) {
		for(var y=0; y < Game.map_grid.height; y++) {
			var at_edge = x == 0 || x == Game.map_grid.width -1 || y == 0 || y == Game.map_grid.height -1;

			if(at_edge) {
				/* coloca a ientidade arvore no tile atual */
				Crafty.e('Tree').at(x,y);
				this.occupied[x][y]=true;
			} else if (Math.random() < 0.06) {
				/* coloca a ientidade arbusto no tile atual */
				Crafty.e('Bush').at(x,y);
				this.occupied[x][y]=true;
			}
		}
	}
	/* cria os vilarejos */
	var max_villages=5;
	for(var x = 0; x < Game.map_grid.width; x++){
		for(var y = 0; y < Game.map_grid.height; y++){
			if(Math.random() < 0.02){
				if(Crafty('Village').length < max_villages && !this.occupied[x][y]){
					Crafty.e('Village').at(x,y);
				}
			}
		}
	}	
	
	/* mostra tela de vitoria */	
	this.show_victory = this.bind('VillageVisited',function(){
		if(!Crafty('Village').length){
			Crafty.scene('Victory');
		}
	});
	
}, function(){
	this.unbind('VillageVisited',this.show_victory);
});

Crafty.scene('Victory',function(){
	Crafty.e('2D,DOM,Text')
	.attr({x:0,y:0})
	.text('caciudis!');

	this.restart_game =this.bind('keyDown',function(){
		Crafty.scene('Game');
	});
}, function(){
	this.unbind('keyDown',this.restart_game);
});



