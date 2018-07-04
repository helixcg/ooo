var dt=document.getElementsByName('dt')[0];
var dtt=document.getElementsByName('dtt')[0];
var cwicon=document.getElementsByName('cwicon')[0];
var asdfg=document.getElementsByClassName('ui-areamini-text')[0]
var con=document.getElementsByName('con')[0]
var box=document.getElementsByName('box')[0]
var prompt=document.getElementsByName('prompt')[0]
var cwcon =document.getElementsByClassName('cwcon')[0]
var item=document.getElementsByClassName('item');
var tab=document.getElementsByClassName("tab")
var modtabheaditem=document.getElementsByClassName('mod_tab_headitem')
var modtabcontentitem=document.getElementsByClassName('mod_tab_content_item')
var catemenuitem=document.getElementsByClassName('cate_menu_item')
var mobilebtn=document.getElementsByClassName('mobile_btn')[0]
var mobilepop=document.getElementById('J_mobile_pop')
var cookies=document.cookie;
var arr=cookies.split("; ");
var flag=false;
var rightul=document.getElementsByClassName('rightul')[0]
var rightuli=rightul.getElementsByTagName('li')
	if(cookies!=""){
		var arr=cookies.split("; ");
			var we=arr.length-1;
			rightuli[0].innerHTML="<a>"+(arr[we].split("=")[0])+"</a>"
			rightuli[1].innerHTML="<a>"+"</a>"	
	}
mobilebtn.onmouseover=function(){
	mobilepop.style.display="block"
}
mobilebtn.onmouseout=function(){
	if (flag==false) {
		mobilepop.style.display="none";
	}
}
mobilepop.onfocus=function(){
	flag=true;
}
mobilepop.onmouseover=function(){
	mobilepop.style.display="block";
}
mobilepop.onmouseout=function(){
	mobilepop.style.display="none";
}
for (var i = 0; i < item.length; i++) {
		item[i].onclick=function(){
		var sss=this.getElementsByTagName('a')[0]
		asdfg.innerHTML=sss.innerHTML;	
	}
}
dt.onmouseover=function(){
	dt.className="dt1";
	dtt.style.display="block"
}
dt.onmouseout=function(){
	if (flag==false) {
		dt.className="dt";
		dtt.style.display="none";
	}
}
dtt.onfocus=function(){
	flag=true;
}
dtt.onmouseover=function(){
	dt.className="dt1";
	dtt.style.display="block";
}
dtt.onmouseout=function(){
	dt.className="dt";
	dtt.style.display="none";
}
cwicon.onmouseover=function(){
	cwicon.className="cwicon";
	box.style.display="none";
	con.style.display="block";
}
cwicon.onmouseout=function(){
	if (flag==false) {
    cwicon.className="cw-icon";
    box.style.display="block";
	con.style.display="none";
	}
}
cwicon.onfocus=function(){
	flag=true;
}
con.onmouseover=function(){
	cwicon.className="cwicon";
	box.style.display="none";
	con.style.display="block";
}
con.onmouseout=function(){
	cwicon.className="cw-icon";
	box.style.display="block";
	con.style.display="none";
}
cwcon.onmouseover=function(){
  prompt.style.display="block";
}
cwcon.onmouseout=function(){
  prompt.style.display="none";
}
for (var i = 0; i < catemenuitem.length; i++) {
	catemenuitem[i].onmouseover=function(){
	this.style.opacity="0.9"
	this.style.backgroundColor="#ccc"
		for (var z = 0; z< catemenuitem.length;z++) {
			if (catemenuitem[z]==this) {
				tab[z].style.display="block";
			}
	    }
    }
    catemenuitem[i].onmouseout=function(){
    	if (flag==false) {
    		this.style.opacity="1"
			this.style.backgroundColor="#666"
    	}
	for (var z = 0; z< catemenuitem.length;z++) {
			if (catemenuitem[z]==this) {
				tab[z].style.display="none";
			}
	    }
    }
}
for (var i = 0; i < tab.length; i++) {
	tab[i].onfocus=function(){
		flag=true;
    }
    tab[i].onmouseover=function(){
	this.style.display="block";
	}
	tab[i].onmouseout=function(){
		this.style.display="none";
	}
}
for (var i = 0; i < modtabheaditem.length; i++) {
	modtabheaditem[i].onmouseover=function(){
		for (var d = 0; d < modtabheaditem.length; d++) {
			if (modtabheaditem[d]==this) {
				modtabcontentitem[d].style.display="block";
			}else{
				modtabcontentitem[d].style.display="none";
			}
		}
	}
}





