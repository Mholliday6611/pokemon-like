import Player from "./Player"
import NpcBody from "./NpcBody"

let game = function(p) {

	let npcs = []

	 for(let i=0; i<3 ; i++){
	 	npcs.push(new NpcBody("Craig",{x:Math.floor(Math.random() * 1000) ,y:Math.floor(Math.random() * 500)}, p))
	 }

	let player = new Player("Malcolm",p)

    p.setup = function(){

      p.createCanvas(900, 500);
      p.background(0)
      p.rectMode(p.CENTER)
      p.ellipseMode(p.CENTER)
    }

    p.draw = function() {
      	p.background(0)
      	player.render()
      
    	player.update(npcs)
      
    	for(let i=0; i< npcs.length; i++){
    		npcs[i].render()
    	}

  };
}

export default game