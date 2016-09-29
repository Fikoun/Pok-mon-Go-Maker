Image.prototype.loaded = false;
class Img{
	constructor(path){
		this.image = new Image();
		this.image.src = path;
		this.image.onload = function (){this.loaded =true;update();}
	}
	draw(x,y,si,rot){
		if (!this.image.loaded)
			return console.log("Image is loading");
		x *= card.width/100;
		y *= card.height/100;
 		drawImage(this.image,x,y,this.image.width*si,this.image.height*si,rot);
	}
}



