//前序
function DLR(node){
	if(node!==null){
		arr.push(node);
		DLR(node.firstElementChild);
		DLR(node.lastElementChild);
	}
}

//中序
function LDR(node){
	if (node!==null) {
		LDR(node.firstElementChild);
		arr.push(node);
		LDR(node.lastElementChild);
	}
}

//后序
function LRD(node){
	if (node!==null) {
		LRD(node.firstElementChild);
		LRD(node.lastElementChild);
		arr.push(node);
	}
}


//遍历数组改变背景
function show(){
	var i=0;
	var timer=setInterval(function(){
		if(i<arr.length){
			var ele=arr[i];
			ele.style.background='#89afc1';
			setTimeout(function() {
				ele.style.background='#FFF';
			}, 500);
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
document.getElementById('LDR').addEventListener("click",function(){
	arr=[];
	LDR(origin);
	show();
})
document.getElementById('LRD').addEventListener("click",function(){
	arr=[];
	LRD(origin);
	show();
})
