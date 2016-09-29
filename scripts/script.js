var preview = getId("preview");
var ktx = preview.getContext('2d');

getId('image').addEventListener('change',function(e){loadInputImage(e.target.files[0])})
getId('result_download').addEventListener('click',function() {
	update();
	this.download = "pokemon.jpg";
	var can = preview;
	this.href = can.toDataURL("image/jpg");
},false);
function update()
{
	card.background.draw(50,50,1,0);
	card.image.draw(50,22,0.55,card.imageRotation*90);
	drawTexts();
}
window.onload=function(){
	card.background.draw(50,50,1,0);
}
window.onresize =function(){
	update();
}