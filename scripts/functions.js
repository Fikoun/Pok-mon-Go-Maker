function getId(id){
	return document.getElementById(id);
}
function loadInputImage(file){
	if (file) {
		var reader = new FileReader();
		reader.onload = function(e){
			card.image = new Img(e.target.result);
			update();
		}
		reader.readAsDataURL(file);
	}
}
function drawImage(i,x,y,w,h,rotate) {
	ktx.save();
	ktx.translate(x,y);
	ktx.rotate(rotate*Math.PI/180);
	ktx.drawImage(i,-w/2,-h/2,w,h);
	ktx.restore();
}

function pokemonRotate(){
	card.imageRotation++;
	if (card.imageRotation > 3)
		card.imageRotation = 0;
	update();
}

