//随机颜色的瀑布流加载

var uls =document.getElementsByClassName('ull');
var toug=document.getElementsByClassName('toug')[0];
	var h=null;
	var minUl=null;
	for (j=0; j<5;j++){
		addLi();
	}
for (var q = 0; q < 1;q++) {
		var imgs =document.getElementsByTagName('img')
			for (var u = 0; u <imgs.length; u++) {
				var r,g,b;
				r=Math.floor(Math.random()*256);
				g=Math.floor(Math.random()*256);
				b=Math.floor(Math.random()*256);
				imgs[u].style.background="rgb("+r+","+g+","+b+")";
		}

}
	function addLi(){
		var newLi=document.createElement("li");
		 newLi.innerHTML="<img src=''>";
		 var imgs =document.getElementsByTagName('img')
		newLi.style.height=(Math.ceil(Math.random()*100)+196)+"px";
		var ulH1=uls[0].clientHeight;
		var ulH2=uls[1].clientHeight;
		var ulH3=uls[2].clientHeight;
		var ulH4=uls[3].clientHeight;
		var minHeight=Math.min(ulH1,ulH2,ulH3,ulH4);
		for (var q = 0; q<uls.length; q++) {
			if (minHeight==uls[q].clientHeight) {
					minUl=uls[q];
			}
		}
		minUl.appendChild(newLi);
		h=imgs.length;
		return h;
		
	}		
	document.onscroll=function(){
 	var docH = document.documentElement.offsetHeight;
 	var winH = document.documentElement.clientHeight;
 	var scrollH= document.body.scrollTop||document.pageYoffset||document.documentElement.scrollTop;
	 	if (docH-winH<=scrollH) {
	 		addLi();
	 		toug.style.display="block";
	 		for (var p=h-1; p <h; p++) {
			var r,g,b;
		   r=Math.floor(Math.random()*256);
		 g=Math.floor(Math.random()*256);
			b=Math.floor(Math.random()*256);
			minUl.lastChild.style.background="rgb("+r+","+g+","+b+")";
			}
	 	}
	 	if (docH-winH+300>=scrollH) {
	 		toug.style.display="none";
	 	}
	 	
	 }
