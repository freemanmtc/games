Game = {
	/*
	/* Initialize and start our game */
	start: function()
	{
		/* Start crafty and set a background color so that we can see it's working */
		Crafty.init(480, 320);
		Crafty.background('#cccccc');
	}
	*/
	
	/* define o tamanho do grid e o tamanho de cada tile */
	map_grid:
	{
		width:24,
		height:16,
		
		tile{
			width:16,
			height:16
		}
	},

	/* a largura total da tela do jogo, ja que o grid se extende pela tela inteira */
	/* largura de um tile veses a largura do grid */
	width: function()
	{
		return this.mad_grid.width * this.map_grid.tile.width;
	},

	/* a altura total da tela do jogo, ja que o grid se extende pela tela inteira */	
	/* altura de um tile veses a largura do grid */
	height: function()
	{
		return this.map_grid.height * this.map_grid.tile.height;
	},

	/* inicializa o crafty e inicia o jogo */
	start: function()
	{
		/* inicia o craty e seta o background */
		Crafty.init(Game.width(),game.height());
		Crafty.background('rgb(249,223,125)');
		
		/* coloca uma arvore em cada canto do viewport */
		for(var x=0;x<Game.map_grid.width;x++)
		{
			for(var y=0;y<map_grid.height;y++)
			{
				var at_edge=x== 0 || x==Game.map_grid.width -1 || y==0 || y==Game.map_grid.height -1;

				/* coloca a ientidade arvore no tile atual */
				if(at_edge)
				{
					Crafty.e('2D,Canvas,Color').attr({
						x: x * Game.map_grid.tile.width,
						y: y * game.map_grid.tile.height,
						w: Game.map_grid.tile.width,
						h: Game.map_grid.tile.height	
					}).color('rgb(20,125,40)');
				}
				elseif(Math.random() < 0.06)
				{
					/* coloca a ientidade arvore no tile atual */
					Crafty.e('2D,Canvas,Color').attr({
						x: x * Game.map_grid.tile.width,
						y: y * game.map_grid.tile.height,
						w: Game.map_grid.tile.width,
						h: Game.map_grid.tile.height	
					}).color('20,125,40');

				}
			}
		}
	}	
}
