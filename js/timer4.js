var cditemtxt=document.getElementsByClassName('cd_itemtxt')
var timer2=null;
var set=new Date("2017/01/01 00:00:00");
var end=set.getTime();
	timer2=setInterval(function(){
		var now=new Date();
		var start=now.getTime();//获取从1970年1月1日8点到当前时间的所有毫秒数
		var total=end-start;//当前时间距设置时间的所有毫秒数
		var days=parseInt(total/(1000*60*60*24));//转换后整天数
		var hours=parseInt(total%(1000*60*60*24)/(1000*60*60));//转换后整小时数
		var minutes=parseInt(total%(1000*60*60)/(1000*60));//转换后整分钟数
		var seconds=parseInt(total%(1000*60)/1000);//转换后整秒数
		var milliseconds=total%1000;
		cditemtxt[0].innerHTML=days;
		cditemtxt[1].innerHTML=hours;
		cditemtxt[2].innerHTML=minutes;

	},1000);