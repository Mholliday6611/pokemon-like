class Player {
	constructor(name,game){
		this.name = name,
		this.game = game;

		this.party = [];
		this.allMonsters = []

		this.x = 30;
		this.y = 20;
		this.acceleration = 1;
		this.direction = 5
		

	}

	render(){
		this.game.rect(this.x, this.y, 55, 55);
	}

	update(npcs){
		this.move(npcs)
	}

	move(npcs){
		    
		if(this.game.keyIsDown(this.game.LEFT_ARROW) && this.x >0){
			
			this.x -= (1 * this.acceleration)
			if(this.acceleration < 5){
				this.acceleration += .2
				this.direction = 4
			}
		}
		if(this.game.keyIsDown(this.game.RIGHT_ARROW) && this.x < this.game.width){
			this.x += (1 * this.acceleration)
			if(this.acceleration < 5){
				this.acceleration += .2
				this.direction = 6
			}
		}
		if(this.game.keyIsDown(this.game.UP_ARROW) && this.y > 0){
			this.y -= (1 * this.acceleration)
			if(this.acceleration < 5){
				this.acceleration += .2
				this.direction = 8
			}
		}
		if(this.game.keyIsDown(this.game.DOWN_ARROW) && this.y < this.game.height){

			this.y += (1 * this.acceleration)
			if(this.acceleration < 5){
				this.acceleration += .2
				this.direction = 2
			}
		}
		if(!this.game.keyIsPressed){
			this.acceleration = 1
		}

		if(this.game.keyIsDown(32)){
			if(this.direction === 8){
				this.y -= 20
			}else if(this.direction === 2){
				this.y += 20
			}else if(this.direction === 4){
				this.x -= 20
			}else if(this.direction === 6){
				this.x += 20
			}
		}
	}
}

export default Player