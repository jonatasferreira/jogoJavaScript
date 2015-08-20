function Sprite (x, y, largura, altura) {
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha = function(xCanvas, yCanvas){
		ctx.drawImage(img, this.x, this.y, this.largura, this.altura, 
						xCanvas, yCanvas, this.largura, this.altura);
	}
}

var bg = new Sprite(0, 0, 600, 600),
	spriteBola = new Sprite(620, 0, 50, 50),

	perdeu = new Sprite(612, 408, 264, 105), // 105 264
	jogar = new Sprite(675, 197, 131, 101),
	novo = new Sprite(69, 707, 229, 49),
	spriteRecord = new Sprite(83, 793, 365, 77),  // 77 365
	spriteChao = new Sprite(0, 630, 600, 650);