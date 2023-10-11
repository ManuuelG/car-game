class Background {
	constructor (ctx) {
		this.ctx  = ctx
		this.canvasW = canvas.width 
		this.canvasH = canvas.height

		this.img = new Image()
		this.img.src = 'assets/road.png'
		
	}

	draw(){
		
		this.ctx.drawImage(this.img,0,0, this.canvasW, this.canvasH )

	}
	
}