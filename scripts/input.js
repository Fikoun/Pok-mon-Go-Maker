class Input{
	constructor(id,max){
		this.max = max;
		this.el = getId(id);
		this.value = this.el.value;
		this.el.addEventListener('input',function(){
			eval("card."+this.id+".value=this.value");
			update();
		});
	}
	cut(){	
		this.el.value = (this.el.value+"").slice(0,-1);
		this.value = this.el.value;
	}
}
