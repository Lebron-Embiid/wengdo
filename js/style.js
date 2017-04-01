window.onload = function(){
	var case_list = document.getElementById("case_list");
	var case_li = case_list.getElementsByTagName("li");
	var case_img = document.getElementById("case_img");
	var case_ul = case_img.getElementsByTagName("ul");

	for(var i=0;i<case_li.length;i++){
		case_li[i].index = i;
		case_li[i].onclick = function(){
			for(var j=0;j<case_li.length;j++){
				case_li[j].className = "";
				case_ul[j].className = "";
			}
			this.className = "on";
			case_ul[this.index].className = "active";
		}
	}
	var news_title = document.getElementById("news_title");
	var p = document.getElementById("p");
	news_title.onmouseover = function(){
		p.style.transform = "translate(-500px) rotate(-1440deg)";
		p.style.transition = "transform 3s";
	}
	news_title.onmouseout = function(){
		p.style.transform = "translate(0) rotate(0)";
		p.style.transition = "transform 3s";
	}

	var img1 = document.getElementById("img1");
	var img2 = document.getElementById("img2");
	var img3 = document.getElementById("img3");
	var img4 = document.getElementById("img4");
	var img5 = document.getElementById("img5");
	var img6 = document.getElementById("img6");
	var a1 = document.getElementById("a1");
	var a2 = document.getElementById("a2");
	var a3 = document.getElementById("a3");
	var a4 = document.getElementById("a4");
	var a5 = document.getElementById("a5");
	var a6 = document.getElementById("a6");
	function hover_img(obj,a,num,active){
		obj.onmouseover = function(){
			this.src = "img/img"+num+".png";
			a.style.color = "#F3631C";
		}
		obj.onmouseout = function(){
			this.src = "img/img"+active+".png";
			a.style.color = "#484848";
		}
	}
	hover_img(img1,a1,11,1);
	hover_img(img2,a2,22,2);
	hover_img(img3,a3,33,3);
	hover_img(img4,a4,44,4);
	hover_img(img5,a5,55,5);
	hover_img(img6,a6,66,6);
}
