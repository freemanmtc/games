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

		/* inicia a cena game */
		Crafty.scene('Game');
	}	
}
