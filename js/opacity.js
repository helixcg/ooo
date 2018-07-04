var slideritem=document.getElementsByClassName('J_slider_item')
var sliderbtn=document.getElementsByClassName('slider_indicator_btn')
var i=0,timer1=null,timer =null,z=0,y=100,st=0,f=0,g=1;
function sss(){
	clearInterval(timer);
	clearInterval(timer1);
	timer=setInterval(function(){
		clearInterval(timer1);
		timer1=setInterval(function(){
			++z;
			--y;
			f=(z/100);
			g=(y/100);
			if (f>=1) {
				f=1;
				z=0;
			}
			if (g<=0) {
				g=0;
				y=100;
			}
			if (i==0) {
				st=8;
		}
		slideritem[st].style.opacity=g;
		slideritem[st].style.zIndex=g;
		slideritem[i].style.opacity=f;
		slideritem[i].style.zIndex=f;
			if (g==0) {
				clearInterval(timer1);
			}
	}, 1);
	i++;
	st=i-1;
	if (i==0) {
		st=8
	}
	if (i==9) {
		i=0;
	}
	sliderbtn[st].style.backgroundColor="#fff";
	sliderbtn[i].style.backgroundColor="red";	
},4000) ;
};
window.onfocus=sss();



