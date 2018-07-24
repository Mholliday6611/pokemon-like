function interactionBody(game, location){
	game.push()

	game.fill(204, 153, 0, 0.2);
	game.rect(location.x, location.y, 85, 85);

	game.pop()
}

export default interactionBody