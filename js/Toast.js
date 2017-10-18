var Toast = {
	makeText: function ToastClass(text, backColor, fontColor, align, bottom) {
		this.textEle = null;
		this.ele = createElement();
		this.finish = false;
		this.timer = null;
		function createElement() {
			var textP = document.createElement("p");
			textP.style.textAlign = align;
			textP.style.width = "100%";
			textP.style.fontSize = "18px";
			textP.style.color = fontColor;
			textP.style.margin = "0px";
			textP.style.lineHeight = "30px";
			textP.style.wordWrap = "break-word";
			textP.innerHTML = text;
			this.textEle = textP;
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
			ele.attributes.id = "Toast" + Math.random();
			console.log(ele.attributes.id);
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
			if(this.finish) {
				return;
			}
			this.ele.style.display = "none";
			this.finish = true;
		};
		this.show = function(time) {
			document.body.appendChild(this.ele);
			if(time != undefined && !isNaN(time)) {
				this.timer = setTimeout(() => this.dismiss(), time);
			}
			this.ele.style.display = "block";
		};
		return this;
	},
	toast: null,
	primary: function(text, time) {
		this.check();
		this.toast = Toast.makeText(text, "#0E7BE6", "#FFF", "justify", "20px");
		this.toast.show(time);
	},
	success: function(text, time) {
		this.check();
		this.toast = Toast.makeText(text, "#2BAB50", "#FFF", "justify", "20px");
		this.toast.show(time);
	},
	warning: function(text, time) {
		this.check();
		this.toast = Toast.makeText(text, "#F04545", "#FFF", "justify", "20px");
		this.toast.show(time);
	},
	check: function() {
		if(this.toast != null && !this.toast.finish) {
			clearTimeout(this.toast.timer);
			this.toast.dismiss();
		}
	}
}