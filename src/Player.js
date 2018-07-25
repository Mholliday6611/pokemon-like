class Player {
	constructor(name,game){
		this.name = name,
		this.game = game;

		this.party = [];
		this.allMonsters = []

		this.x = 100;
		this.y = 200;
		this.velocityX = 0
		this.velocityY = 0
		this.acceleration = 1;
		this.direction = 5
		this.xPosMove = true
		this.xNegMove = true
		this.yPosMove = true
		this.yNegMove = true
	}

	render(){
		this.game.rect(this.x, this.y, 50, 50);

	}

	update(npcs){
		this.x += this.velocityX
		this.y += this.velocityY
		this.move()
		this.collision(npcs)
	}

	move(){
		if(this.game.keyIsDown(this.game.LEFT_ARROW)){
			if(this.velocityX > -4){
				this.velocityX -= .5
				this.direction = 4
			}
		}
		if(this.game.keyIsDown(this.game.RIGHT_ARROW)){
			if(this.velocityX < 4){
				this.velocityX += .5
				this.direction = 6
			}
		}
		if(this.game.keyIsDown(this.game.UP_ARROW)){
			if(this.velocityY > -4){
				this.velocityY -= .5
				this.direction = 8
			}
		}
		if(this.game.keyIsDown(this.game.DOWN_ARROW) && this.yNegMove == true){
			if(this.velocityY < 4){
				this.velocityY += .5
				this.direction = 2
			}
		}

		if(!this.game.keyIsPressed){
			this.velocityY = 0
			this.velocityX = 0
		}

		// if(this.game.keyIsDown(32)){
		// 	if(this.direction === 8){
		// 		this.velocityY -= 5
		// 	}else if(this.direction === 2){
		// 		this.velocityY += 5
		// 	}else if(this.direction === 4){
		// 		this.velocityX -= 5
		// 	}else if(this.direction === 6){
		// 		this.velocityX += 5
		// 	}
		// }
	}

	collision(npcs){
		/*if(this.x < 25 || this.x > this.game.width-25){
			this.velocityX = -this.velocityX 
		}
		if(this.y < 25 || this.y > this.game.height-25){
			this.velocityY = -this.velocityY
		}
		*/
		npcs.forEach(elem => {
			if(this.game.dist(this.x,this.y,elem.x,elem.y) < (elem.interactionBoxWidth/2 + 50/2))
			{
				if(this.y - elem.y < 20 && (this.x-elem.x < 5 || this.x-elem.x >-5 ))
				{
					this.yVelocity = 0
					this.yNegMove = false 
				}
			}
			else 
			{
				this.xPosMove = true
				this.xNegMove = true
				this.yPosMove = true
				this.yNegMove = true
			} 
		


			if(this.game.dist(this.x,this.y,elem.x,elem.y) < (elem.interactionBoxWidth/2 + 50/2)){

				if(this.game.keyIsDown(32)){
					alert(elem.dialogue)
				}
			}
		})
	}
}

export default Player