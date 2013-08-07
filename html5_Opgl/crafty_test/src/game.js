Game = {
	/* define o tamanho do grid e o tamanho de cada tile */
	map_grid: {
		width: 24,
		height: 16,
		
		tile: {
			width: 16,
			height: 16
		}
	},

	/* a largura total da tela do jogo, ja que o grid se extende pela tela inteira */
	/* largura de um tile veses a largura do grid */
	width: function() {
		return this.map_grid.width * this.map_grid.tile.width;
	},

	/* a altura total da tela do jogo, ja que o grid se extende pela tela inteira */	
	/* altura de um tile veses a largura do grid */
	height: function() {
		return this.map_grid.height * this.map_grid.tile.height;
	},

	/* inicializa o crafty e inicia o jogo */
	start: function() {
		/* inicia o craty e seta o background */
		Crafty.init(Game.width(),Game.height());
		Crafty.background('rgb(249,223,125)');
		
		/* coloca uma arvore em cada canto do viewport */
		for(var x=0; x < Game.map_grid.width; x++) {
			for(var y=0; y < Game.map_grid.height; y++) {
				var at_edge = x == 0 || x == Game.map_grid.width -1 || y == 0 || y == Game.map_grid.height -1;

				if(at_edge) {
					/* coloca a ientidade arvore no tile atual */
					Crafty.e('Tree').at(x,y);
				} else if (Math.random() < 0.06) {
					/* coloca a ientidade arbusto no tile atual */
					Crafty.e('Bush').at(x,y);
				}
			}
		}
	}	
}
