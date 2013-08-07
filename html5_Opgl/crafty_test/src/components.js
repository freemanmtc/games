/* o componente grid abilita um elemento a ser localizado */
/* um grid de tiles */
Crafty.c('Grid',{
	init: function(){
		this.attr({
			w:Game.map_grid.tile.width,
			h:Game.map_grid.tile.height
		})
	},


	/* localiza a entidade ma posisao dada no grid */
	at: function(x,y){
		if(x===undefined && y===undefined){
			return{x:this.x/Game.map_grid.tile.width,y:this.y/game.map_grid.tile.height}
		}else{
			this.attr({x: x * Game.map_grid.tile.width,y: y * Game.map_grid.tile.height});
			return this;
		}
	}
});

/* ator */
Crafty.c('Actor',{
	init: function() {
		this.requires('2D,Canvas,Grid');
	}
});
/* arvore */
Crafty.c('Tree',{
	init: function(){
		this.requires('Actor,Color')
		.color('rgb(20,125,40)');
	},
});

/* arbusto */
Crafty.c('Bush',{
	init: function(){
		this.requires('Actor,Color')
		.color('rgb(20.185.40)');
	},
});
