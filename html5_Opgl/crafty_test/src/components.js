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
		this.requires('Actor,Color,Solid')
		.color('rgb(20,125,40)');
	},
});

/* arbusto */
Crafty.c('Bush',{
	init: function(){
		this.requires('Actor,Color,Solid')
		.color('rgb(20.185.40)');
	},
});

/* vilarejo */
Crafty.c('Village',{
	init: function(){
		this.requires('Actor,Color')
		.color('rgb(170,125,40)');
	},

	collect: function(){
		this.destroy();
		Crafty.trigger('VillageVisited',this);
	}
});

/* player */
Crafty.c('PlayerCharacter',{
	init: function(){
		this.requires('Actor,Fourway,Color,Collision')
		.fourway(4)
		.color('rgb(20,75,40)')
		.stopOnSolids()
		.onHit('Village',this.visitVillage);
		
	},

	/* sera chamado quando a entidade player colide com algo solido */
	stopOnSolids: function(){
		this.onHit('Solid',this.stopMovement);
		return this;
	},

	/* para o movimento */
	stopMovement: function(){
		this._speed=0;
		if(this._movement){
			this.x-=this._movement.x;
			this.y-=this._movement.y;

		}
	},

	/* coleta o vilarejo */
	visitVillage: function(data){
		village=data[0].obj;
		village.collect();
	}
});


