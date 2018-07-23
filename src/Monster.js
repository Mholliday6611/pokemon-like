const Types = require('Types')

class Monster {
	constructor(monsterId,name,type,moves,ability,baseStats){
		this.monsterId = monsterId,
		this.name = name,
		this.type = type,
		this.description = description,
		this.moves = moves,
		this.ability = ability

		this.stats = {
			strength: 0,
			defense: 0,
			speed: 0,
			specialAttack: 0,
			specialDefense: 0,
			accuracy: 0
		}
	}
}

let MonsterCreator = function(monsterId,monsterList){
	let monster = monsterList.find(element=>element.id = monsterId)

	return new Monster(monster.id,monster.name,monster.type,monster.description,[],monster.abilities[Math.floor(Math.random()*monster.abilities.length)])
}
