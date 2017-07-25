                 

$(document).ready(function(){
	var a = document.createElement('audio');
	var player = {
	  play: function (audio,url){
        audio.src = url;
	    audio.controls = 'controls';
	    audio.play();
	},
	stopplay: function(audio){
		audio.pause();
	}
};

 var words = [
"0:15静静的村庄飘着白的雪",
"0:22阴霾的天空下鸽子飞翔",
"0:28白桦树刻着那两个名字",
"0:35他们发誓相爱用尽这一生",
"0:40有一天战火烧到了家乡",
"0:47小伙子拿起枪奔赴边疆",
"0:53心上人你不要为我担心",
"0:58等着我回来在那片白桦林",
"1:05天空依然阴霾依然有鸽子在飞翔",
"1:12谁来证明那些没有墓碑的爱情和生命",
"1:17雪依然在下那村庄依然安详",
"1:22年轻的人们消逝在白桦林",
"1:30噩耗声传来在那个午后",
"1:35心上人战死在远方沙场",
"1:41她默默来到那片白桦林",
"1:48望眼欲穿地每天守在那里",
"1:52她说他只是迷失在远方",
"2:05他一定会来来这片白桦林",
"2:19天空依然阴霾依然有鸽子在飞翔",
"2:24谁来证明那些没有墓碑的爱情和生命",
"2:30雪依然在下那村庄依然安详",
"2:36年轻的人们消逝在白桦林",
"2:43长长的路呀就要到尽头",
"2:48那姑娘已经是白发苍苍",
"2:58她时常听他在枕边呼唤",
"3:00来吧亲爱的来这片白桦林",
"3:05在死的时候她喃喃地说",
"3:10我来了等着我在那片白桦林",
 ];
function getnowtime(){
	var date = new Date();

	return parseInt(date.getTime()/1000);
}
function timepass(date1,date2){
	return (date2-date1) ;
}
function getchangetime(arry){
	 var changtime = [];
    for(var i=0;i<arry.length;i++){
    	 var t1 = words[i].substr(0, 4);
         var arr=t1.split(':');
		  var s1= parseInt(arr[0]*60)+parseInt(arr[1]);
		 changtime.push(s1);
    }
    arry = changtime;
    return arry ;  
}
  var index=0;
  var flag =0;
function update(time){
   var thechangetime = getchangetime(words); 
    console.log(index);
    if(time>index){
     for(var i=0;i<thechangetime.length;i++){
      	if(time>thechangetime[i]&&time<thechangetime[i+1])
      	{
      		  index = thechangetime[i+1]
      		 /* console.log(index);
   	          var w=$("<p></p>").text(words[i].substr(4,words[i].length-4));
   		      $("#ww").append(w);
               */
              var $obj= $("#one");
              $obj.animate({
               top:flag+'px'
          },2000)

            flag-=30;
            break;

           }
     }
  }
}

    var recycle;

 
  $("#play").click(function(){
   
  if($('#play').attr("class")=='stop'){
			$("#play").removeClass('stop').addClass('on');
			player.play(a,"music/one.mp3");
      var time1 = getnowtime();
      recycle = setInterval(  function(timer){
       var time2 = getnowtime();
       var t= timepass(time1,time2);
       update(t);  
      },1000);
		  recycle();
    
		}
		else{
			$("#play").removeClass('on').addClass('stop');
			player.stopplay(a);
      clearInterval(recycle);
		}
		});

});
