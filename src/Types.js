const Types = {
	FIRE: 1,
	WATER: 2,
	GRASS: 3,
	properties: {
		1: {Strong:3,Weak:1},
		2: {Strong:1,Weak:3},
		3: {Strong:2,Weak:1}
	}
}

Object.freeze(Types)

module.exports = Types