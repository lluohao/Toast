function ToastClass(text, backColor, fontColor, align, bottom) {
	this.ele = createElement();

	function createElement() {
		var textP = document.createElement("p");
		textP.style.textAlign = align;
		textP.style.width = "100%";
		textP.style.fontSize = "18px";
		textP.style.color = fontColor;
		textP.style.margin = "0px";
		textP.style.lineHeight = "30px";
		textP.style.wordWrap = "break-word";
		textP.innerText = text;
		var ele = document.createElement("div");
		ele.style.borderRadius = "4px";
		ele.style.position = "fixed";
		ele.style.right = "10px";
		ele.style.width = "360px";
		ele.style.background = backColor;
		ele.style.padding = "15px 25px";
		ele.style.bottom = bottom;
		ele.style.display = "none";
		ele.appendChild(textP);
		return ele;
	};
	this.height = function() {
		return this.ele.innerHeight;
	};
	this.bottom = function(bottom) {
		if(bottom != undefined) {
			if(isNaN(bottom)) {
				this.ele.style.bottom = bottom;
			} else {
				this.ele.style.bottom = bottom + "px";
			}
		}
		var bottomText = this.ele.style.bottom;
		return parseInt(bottomText.substr(0, bottomText.length - 2));
	};
	this.dismiss = function() {
		document.body.removeChild(this.ele);
		this.ele.style.display = "none";
	};
	this.show = function(time) {
		document.body.appendChild(this.ele);
		if(time != undefined && !isNaN(time)) {
			setTimeout(() => this.dismiss(), time);
		}
		this.ele.style.display = "block";
	};
	return this;
}

var Toast = {
	makeText: ToastClass,
	toastList: new Array(),
	primary: function(text, time) {
		Toast.makeText(text, "#0E7BE6", "#FFF", "justify", "350px").show(time);
	},
	success: function(text, time) {
		Toast.makeText(text, "#2BAB50", "#FFF", "justify", "350px").show(time);
	},
	warning: function(text, time) {
		Toast.makeText(text, "#F04545", "#FFF", "justify", "350px").show(time);
	},
	addText: function(toast) {
		for(x in this.toastList){
			toastList
		}
	}
}