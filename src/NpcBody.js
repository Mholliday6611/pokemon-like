import interactionBody from "./interactionBody"

class NpcBody {
	constructor(name, startPos, game){
		this.name = name,
		this.game = game

		this.x = startPos.x
		this.y = startPos.y
		this.location = {x:this.x, y:this.y}
	}

	render(){
		interactionBody(this.game, this.location)

		this.game.push()
		this.game.fill(122,331,331)
		this.game.rect(this.x, this.y, 55, 55);
		this.game.pop()
	}
}

export default NpcBody