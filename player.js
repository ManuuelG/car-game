class Player {
	constructor(ctx, canvasW, canvasH, keys) {
		this.ctx = ctx
		this.canvasW = canvasW
		this.canvasH = canvasH
		this.keys = keys

		this.img = new Image()
		this.img.src = 'assets/ambulance.png'

		this.img.frameIndex = 0
		this.img.frames = 3

		this.x = canvasW * 0.08
		this.y = canvasH * 0.77

		this.vx = 1

		this.w = 150
		this.h = 150

		this.actions = {
			left: false,
			right: false,
		}

		this.setControls()
	}

	setControls() {
		document.addEventListener('keydown', (event) => {
			switch (event.code) {
				case this.keys.TURNLEFT:
					this.actions.left = true

					break

				case this.keys.TURNRIGHT:
					this.actions.right = true
					break
			}
		})

		document.addEventListener('keyup', (event) => {
			switch (event.code) {
				case this.keys.TURNLEFT:
					this.actions.left = false

					break

				case this.keys.TURNRIGHT:
					this.actions.right = false
					break
			}
		})
	}

	draw() {


		this.ctx.drawImage(
			this.img,
			this.img.frameIndex * (this.img.width / this.img.frames), // sx
			0,
			this.img.width / this.img.frames,
			this.img.height,
			this.x,
			this.y,
			this.w,
			this.h
		)

		this.animateSprite()
	}

	animateSprite(frameCounter) {
		if (frameCounter % 6 === 0) {
			this.img.frameIndex++

			if (this.img.frameIndex >= this.img.frames) {
				this.img.frameIndex = 0
			}
		}
	}

	move() {
		if (this.actions.left) {
            if (this.x > 20)
			this.x -= this.vx
		}
        if (this.actions.right) {
            if (this.x < 340)
            this.x += this.vx
        }
	}
        
}
