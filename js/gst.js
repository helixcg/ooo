 window.onload = function() {
                var aDiv = document.getElementsByClassName('sk_item_img');
                for (var sf = 0; sf < aDiv.length; sf++) {
                    aDiv[sf].timer8=null;
                    aDiv[sf].onmouseover = function() {
                        startMove(this,4);
                       
                    };
                    aDiv[sf].onmouseout = function() {
                        startMove(this,-3);
                    };
                }
            }
            function startMove(obj, iTarget) {
            	var di=0;
                clearInterval(obj.timer8);
                obj.timer8 = setInterval(function() {
                    var speed = (iTarget - di);
                    if (speed>0) {
                    	di++;
                    }else{
                    	di--;
                    }

                    if (di == iTarget) {
                        clearInterval(obj.timer8);
                    } else {
                        obj.style.marginLeft =di + 'px';
                    }
                }, 30);
            }

// for (var i = 0; i < skitemimg.length; i++) {
// 	skitemimg[i].timer8=null;
// 	skitemimg[i].onmouseover=function(){
// 		startMove(this)
// 	};
// 	skitemimg[i].onmouseout=function(){
// 		startMove(this)
// 	};
// }
// function startMove(obj){
// 	clearInterval(obj.timer8);
// 	obj.timer8=setInterval(function(){
// 		 var  speed=0;
// 		 var flag=false;
// 		 if (obj.style.marginLeft==-5&&flag==true) {
// 		 	speed++;
// 		 	if (speed>=0) {
// 		 		speed=0;
// 		 		flag=false;
// 		 		clearInterval(obj.timer8);
// 		 	}
// 		 }else{
// 		 	speed--;
// 		 	if (speed<=-5) {
// 		 		speed=-5;
// 		 		flag=true;
// 		 		clearInterval(obj.timer8);
// 		 	}
// 		 }
//          obj.style.marginLeft =speed + 'px';            
// 	},30);
// }



// var xz=0;
// for (var st=0; st < skitemimg.length; st++) {
// 	skitemimg[st].timer6=null;
// 	skitemimg[st].timer7=null;
// 	skitemimg[st].onmouseover=function(){
// 	for (var v = 0; v < skitemimg.length;v++) {
// 		if (skitemimg[v]==this) {
// 			// alert(v)
// 			this_0=this;
// 			timer7=null;

// 			 xz=0;
// 				this_0.timer6=setInterval(function (){
// 					--xz;
// 					if (xz<=-5) {
// 					xz=-5;
// 					clearInterval(this_0.timer6);
// 				}
// 			    this_0.style.marginLeft=xz+"px";
// 			    },50);
// 		    }
// 	    }
// 	}
// 	skitemimg[st].onmouseout=function(){
// 		for (var v = 0; v < skitemimg.length;v++) {
// 			if (skitemimg[v]==this) {
// 				this_1=this;
// 				timer6=null;
// 				xz=-5;
// 					this_1.timer7=setInterval(function (){
// 						++xz;
// 						if (xz>=0) {
// 						xz=0;
// 						clearInterval(this_1.timer7);
// 					}
// 				    this_1.style.marginLeft=xz+"px";
// 				    },50);  
// 			}
// 		}
// 	}       
// }

// var timer6=null,timer7=null;
// 	skitemimg[0].onmouseover=function(){
// 		    timer6=null;
// 		    clearInterval(timer7);
// 		    xz=0;
// 				timer6=setInterval(function (){
// 					--xz;
// 					if (xz==-5) {
// 						xz=-5;
// 						clearInterval(timer6);
// 					}
// 					skitemimg[0].style.marginLeft=xz+"px";
// 			    },30);
// 		}
// 	skitemimg[0].onmouseout=function(){
// 			timer7=null;
// 			clearInterval(timer6);
// 			xz=-5;
// 					timer7=setInterval(function (){
// 						++xz;
// 						if (xz==0) {
// 							xz=0;
// 							clearInterval(timer7);
// 						}
// 						skitemimg[0].style.marginLeft=xz+"px";
// 				    },30);
// 	}

		      

