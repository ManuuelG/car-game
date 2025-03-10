const Game = {
	ctx: undefined,
	canvasW: undefined,
	canvasH: undefined,
	fps: 60,
	keys: {
		TURNLEFT: 'ArrowLeft',
		TURNRIGHT: 'ArrowRight',
	
	},

	init: function () {
		const canvas = document.querySelector('canvas')
		this.ctx = canvas.getContext('2d')
		this.canvasW = canvas.width 
		this.canvasH = canvas.height
		
		this.reset()
	},

	reset: function () {
		

		this.background = new Background(this.ctx, this.canvasW, this.canvasH)
		this.player = new Player(this.ctx,this.canvasW, this.canvasH, this.keys)
		
		this.start()
	},

	start: function () {
		// loop de render

		let frameCounter = 0

		this.intervalId = setInterval(() => {
			frameCounter++
			this.ctx.clearRect(0, 0, this.canvasW, this.canvasH)

			// if (frameCounter % 50 === 0) {
			// 	this.generateObstacle()
			// }

			this.background.draw()

			// this.obstacles.forEach((obstacle) => {
			// 	obstacle.draw()
			// 	obstacle.move()
			// })

			// if (this.isCollision()) {
			// 	this.gameOver()
			// }

			this.player.draw()
			this.player.move()
		}, 1000 / this.fps)
	},

}




