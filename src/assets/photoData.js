// JavaScript Document

var data=[];

var dataStr='01、剪刀手嫣然<br>\
<br>\
吴嫣然和爸妈一起逛沃尔玛<br>\
<br>\
<br>\
02、嫣然与两个气球<br>\
<br>\
吴嫣然和爸妈一起逛沃尔玛<br>\
<br>\
<br>\
03、嫣然在玩耍<br>\
<br>\
吴嫣然和妈妈一起春游<br>\
<br>\
<br>\
04、剪刀手嫣然2<br>\
<br>\
吴嫣然和妈妈休息<br>\
<br>\
<br>\
05、剪刀手嫣然3<br>\
<br>\
吴嫣然和妈妈在吃东西<br>\
<br>\
<br>\
06、嫣然和妈妈<br>\
<br>\
吴嫣然和妈妈春游<br>\
<br>\
<br>\
07、剪刀手嫣然4<br>\
<br>\
吴嫣然和小火车的故事<br>\
<br>\
<br>\
08、剪刀手嫣然5<br>\
<br>\
吴嫣然和绿色小火车<br>\
<br>\
<br>\
09、剪刀手嫣然6<br>\
<br>\
吴嫣然和红色车厢<br>\
<br>\
<br>\
10、忧郁的嫣然<br>\
<br>\
吴嫣然遇到了什么不开心的事了<br>\
<br>\
<br>\
11、嫣然与绿色小火车<br>\
<br>\
吴嫣然玩累了，从绿色小火车上下来了<br>\
<br>\
<br>\
12、嫣然的玩具<br>\
<br>\
吴嫣然把简易喷水装置装满水，这是要去喷谁呢？<br>\
<br>\
<br>\
13、嫣然和紫色气球<br>\
<br>\
吴嫣然神气的眼神<br>\
<br>\
<br>\
14、蹲下的嫣然<br>\
<br>\
吴嫣然和爸妈一起逛沃尔玛，累了休息下<br>\
<br>\
<br>\
15、剪刀手嫣然6<br>\
<br>\
吴嫣然和爸妈一起逛沃尔玛，拍个照，妹妹的<br>\
<br>\
<br>\
16、嫣然与风车<br>\
<br>\
吴嫣然一定很高兴吧，这么多粉红色的风车啊<br>\
<br>\
<br>\
';

var d=dataStr.split('<br><br><br>');
for(var i=0;i<d.length-1;i++){
	var c=d[i].split('<br><br>');
	data.push({
		img:c[0].substr(0,2)+'.jpg',
		caption:c[0].split('、')[1],
		desc:c[1]
	});
	//console.log(c[0].substr(0,2)+'.jpg');
}

export default data

//console.log(data);