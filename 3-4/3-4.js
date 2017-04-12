//创建棋盘
function table(){
	var qipan=document.getElementById('qipan');
	for (var i = 0; i <10; i++) {
		var tr=document.createElement('tr');
		qipan.appendChild(tr);
		for (var j = 0; j < 10; j++) {
			var td=document.createElement('td');
			tr.appendChild(td);
		}
	}
}

//检测方向
function dir(h,w,t,l){
	if(h<w){
		if(t==0) {return "top"}
			else{return "bot"}
	}else{
		if(l==0){return "lef"}
			else{return "rig"}
	}
}

//宽高互换
function dirD(dirbox,h,w){
	dirbox.style.height=w+'px';
	dirbox.style.width=h+'px';
}

//旗子定位
function gps(){
	var input=document.getElementById('input').value;
	var dirbox=document.getElementById('direction');
	var	qizi=document.getElementById('qizi'),
		T=qizi.offsetTop,
		L=qizi.offsetLeft,
		h=dirbox.offsetHeight,
		w=dirbox.offsetWidth,
		t=dirbox.offsetTop,
		l=dirbox.offsetLeft;
		x=Math.abs(h-w);
		odir=dir(h,w,t,l);
		switch (input){
			case 'GO':
				switch (odir){
					case "top":qizi.style.top=T-52+'px';break;
					case "bot":qizi.style.top=T+52+'px';break;
					case "lef":qizi.style.left=L-52+'px';break;
					case "rig":qizi.style.left=L+52+'px';break;
				};break;
			case 'TUN LEF':
				dirD(dirbox,h,w);
				switch (odir){
					case "top":break;
					case "bot":dirbox.style.top=0+'px';
							   dirbox.style.left=x+'px';break;
					case "lef":dirbox.style.top=x+'px';break;
					case "rig":dirbox.style.left=0+'px';break;
				};break;
			case 'TUN RIG':
				dirD(dirbox,h,w);
				switch (odir){
					case "top":dirbox.style.left=x+'px';break;
					case "bot":dirbox.style.top=0+'px';break;
					case "lef":break;
					case "rig":dirbox.style.top=x+'px';
							   dirbox.style.left=0+'px';break;
				};break;
			case 'TUN BAC':
				switch (odir){
					case "top":dirbox.style.top=x+'px';break;
					case "bot":dirbox.style.top=0+'px';break;
					case "lef":dirbox.style.left=x+'px';break;
					case "rig":dirbox.style.left=0+'px';break;
				};break;

		};
		if(qizi.offsetTop<11) qizi.style.top='11px';
		if(qizi.offsetTop>479) qizi.style.top='479px';
		if(qizi.offsetLeft<11) qizi.style.left='11px';
		if(qizi.offsetLeft>479) qizi.style.left='479px';
		console.log(qizi.offsetTop,qizi.offsetLeft)
}

window.onload=function(){
	table();
	document.getElementById('btn').addEventListener('click',gps);
}