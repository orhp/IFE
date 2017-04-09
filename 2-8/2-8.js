//前序
function DLR(node){
	if(node!==null&&node.nodeName=="DIV"){
		arr.push(node);
		for (var i = 0; i < node.childNodes.length; i++) {
			DLR(node.childNodes[i]);
		}
	}
}


//后序
function LRD(node){
	if(node!==null&&node.nodeName=="DIV"){
		for (var i = 0; i < node.childNodes.length; i++) {
			LRD(node.childNodes[i]);
		}
		arr.push(node);
	}
}


//遍历数组改变背景
function show(val){
	var i=0;
	var timer=setInterval(function(){
		if(i<arr.length){
			var ele=arr[i];
			ele.style.background='#89afc1';
			if(val!=null&&val==ele.lastElementChild.innerHTML){
				ele.style.background='#bdfff6';
			}else{
			setTimeout(function() {
				ele.style.background='#FFF';
			}, 500);}
			i++;
		}else{
			clearInterval(timer);
		}
	},500);
}


var arr=new Array();
var origin=document.getElementById("origin");
document.getElementById('DLR').addEventListener("click",function(){
	arr=[];
	DLR(origin);
	show();
})
document.getElementById('LRD').addEventListener("click",function(){
	arr=[];
	LRD(origin);
	show();
})
document.getElementById('search').addEventListener("click",function(){
	var val=document.getElementById('text').value;
	arr=[];
	LRD(origin);
	show(val);
})
