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
		this.PosMoveX = true
		this.NegMoveX = true
		this.PosMoveY = true
		this.NegMoveY = true
		this.npcCollided = false
	}

	render(){
		this.game.rect(this.x, this.y, 50, 50);

	}

	update(npcs){
		this.x += this.velocityX
		this.y += this.velocityY
		this.move()
		this.collision(this,npcs)
	}

	move(){
		if(this.game.keyIsDown(this.game.LEFT_ARROW) && this.NegMoveX){
			if(this.velocityX > -5){
				this.velocityX -= 5
				this.direction = 4
			}
		}
		if(this.game.keyIsDown(this.game.RIGHT_ARROW) && this.PosMoveX){
			if(this.velocityX < 5){
				this.velocityX += 5
				this.direction = 6
			}
		}
		if(this.game.keyIsDown(this.game.UP_ARROW) && this.NegMoveY){
			if(this.velocityY > -5){
				this.velocityY -= 5
				this.direction = 8
			}
		}
		if(this.game.keyIsDown(this.game.DOWN_ARROW) && this.PosMoveY){
			if(this.velocityY < 5){
				this.velocityY += 5
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

		if(this.game.keyIsDown(32)){
			console.log(this)
		}
	}

	collision(player,npcs){

		npcs.forEach(elem => {
			if(this.x< elem.x + elem.width && this.x + 50 > elem.x && this.y < elem.y + elem.height && 50 + this.y > elem.y){

				if(this.PosMoveX == true && this.npcCollided == this.false && this.x < elem.x){
					this.velocityX -= this.velocityX
					this.PosMoveX = false
					this.npcCollided = true
				}else{
					this.PosMoveX = true
					this.npcCollided = false
				}

			}
		


			if(this.game.dist(this.x,this.y,elem.x,elem.y)-25 < (elem.interactionBoxWidth/2 )){

				if(this.game.keyIsDown(32)){
					alert(elem.dialogue)
				}
			}
		})

		if(this.x <= 25 && this.NegMoveX == true && this.npcCollided == false){
			this.velocityX -= this.velocityX
			this.NegMoveX = false
		}else{
			this.NegMoveX = true
		}

		if(this.x >= this.game.width-25 && this.PosMoveX == true && this.npcCollided == false){
			this.velocityX -= this.velocityX
			this.PosMoveX = false
		}else{
			this.PosMoveX = true
		}

		if(this.y <= 25 && this.NegMoveY == true && this.npcCollided == false){
			this.velocityY -= this.velocityY
			this.NegMoveY = false
		} else{
			this.NegMoveY = true
		}
		if(this.y >= this.game.height-25 && this.PosMoveY == true && this.npcCollided == false){
			this.velocityY -= this.velocityY
			this.PosMoveY = false
		}else{
			this.PosMoveY = true
		}
	}
}

function rotate(velocity, angle) {
    const rotatedVelocities = {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
    };

    return rotatedVelocities;
}

export default Player