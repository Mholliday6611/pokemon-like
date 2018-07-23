import Player from "./Player"

let game = function(p) {

	let player = new Player("Malcolm",p)

    p.setup = function(){

      p.createCanvas(1080, 720);
      p.background(0)
    }

    p.draw = function() {
      	p.background(0)
      	player.render()
    	player.update()
  };
}

export default game