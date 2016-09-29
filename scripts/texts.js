class Text{
	constructor(ob){
		this.x = ob.x;
		this.y = ob.y;
		this.color = ob.color;
		this.size = ob.size;
		this.align = ob.align || "center";
		this.pattern = ob.pattern;
		this.in = eval("card."+ob.id);
		this.text= ob.text || "";
		this.follower = ob.follower;
	}
	update(){
		this.setStyle();
		while(ktx.measureText(this.in.value).width > this.in.max){
			this.in.cut();
		}
		this.text = this.in.value;
	}
	draw(){
		this.setStyle();
		if (this.pattern)
			ktx.fillText(this.pattern(),this.x*card.width/100,this.y*card.height/100);
		else
			ktx.fillText(this.text,this.x*card.width/100,this.y*card.height/100)
		if (this.follower) {
			var wid = ktx.measureText(this.text).width/2;
			if (this.follower.side)
					wid *= -1;
			if (typeof this.follower.value == 'string') {
				ktx.font = this.follower.size+"pt Lato";
				ktx.fillText(this.follower.value,(this.x*card.width/100)+wid+this.follower.x,(this.y*card.height/100)+this.follower.y);
			}else {
				wid *= 100/card.width;
				this.follower.value.draw(this.x+wid+this.follower.x,this.y+this.follower.y,this.follower.size,0);
			}
		}
	}
	setStyle(){
		ktx.textAlign = this.align;
		ktx.fillStyle = this.color;
		ktx.textBaseline = "middle";
		ktx.font = (this.size)+"pt Lato";
	}
}
function text(ob){
	card.texts.push(new Text(ob));
}
function drawTexts(){
	card.texts.forEach(function(e){e.update();e.draw()});
}
function setStyle(i){
	card.texts[i].setStyle();
}
function measureText(i){
	setStyle(i);
	return ktx.measureText(card.texts[i].text).width;
}


function fiko(){
	var texts = [{x:500,y:439},{x:510,y:495},{x:795,y:495},{x:370,y:580}];
	for (var i = 0; i < texts.length; i++) {
		console.log("x:"+(Math.round(texts[i].x*10)/100)+",y:"+(Math.round(texts[i].y*10))/100);
	}
}

text({x:50.07,	y:38.13, color:"#427377",size:42,id:"name",			follower:{value:card.pen_icon,side:false,x:4,y:0,size:1}});
text({x:50,		y:43.9,  color:"#364e43",size:21,id:"hp",			pattern:function(){return "HP "+this.text+" / "+this.text;}});
text({x:21.65,	y:49.5,  color:"#46767a",size:23,id:"type"});
text({x:51,		y:49.5,  color:"#46767a",size:23,id:"weight",		pattern:function(){return this.text+" kg"}});
text({x:79.5,	y:49.5,  color:"#46767a",size:23,id:"height_stat",	pattern:function(){return this.text+" m"}});
text({x:30.31,	y:58.51, color:"#336165",size:28,id:"stardust",		follower:{value:card.stardust_icon,side:true,x:-2.5,y:0.1,size:1}});
text({x:74.42,	y:58.51, color:"#336165",size:28,id:"candy",		follower:{value:card.candy_icon,side:true,x:-3,y:0,size:0.73}});
text({x:51.42,	y:4.6,   color:"white",  size:46,id:"cp",			follower:{value:"CP",side:true,x:-25,y:10,size:30}});
text({x:69,		y:61.355,color:"#888888",size:17,id:"name",			pattern:function(){return this.text.toUpperCase()+" CANDY"}});

text({x:60.5,	y:67.5, color:"#336165",size:22,id:"powerup_stardust",follower:{value:card.stardust_icon,side:true,x:-1.8,y:0,size:0.88}});
text({x:82.5,	y:67.5, color:"#336165",size:22,id:"powerup_candy",	follower:{value:card.candy_icon,side:true,x:-3,y:0,size:0.58}});















