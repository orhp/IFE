
//创建数组储存输入数据
var arr=new Array();


//生成随机数组
function ranArr(){
    for(i=0;i<60;i++){
        arr[i]=Math.floor(Math.random()*90)+10;
    }
    add();
}

function sortA(){                       
        var i = 0,j = 1,temp;           
                len = arr.length;
                timer = null;
        var timer = setInterval(run,5);
        function run() {
            if (i < len) {
                if (j < len) {
                    if (arr[i] > arr[j]) {
                        temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                        add();
                    }
                    j++;
                } else {
                    i++;
                    j = i + 1;
                }
            } else {
                clearInterval(timer);
                return;
            }
        }

    }
/*快速排序
function sortA(lo,hi){
    var i=lo,j=hi,v=arr[lo];
    if(lo<hi&&lo>=0){
        while(i<j){
            for(;j>i;j--){
                if(arr[j]<v){
                    arr[i]=arr[j];
                    break;
                }
            }
            for(;j>i;i++){
                if(arr[i]>v){
                    arr[j]=arr[i];
                    break;
                }
            }
            add();
        }
        arr[i]=v;
        sortA(lo,i-1);
        sortA(i+1,hi);
    }
}
*/


//创建元素 -------每次都把所有元素重新刷新一次好崩溃
function add(){                              
    var cont=document.getElementById('cont');
    cont.innerHTML=null;
    for(i=0;i<arr.length;i++){
        var div1=document.createElement('div');
        cont.appendChild(div1);
        div1.style.height=arr[i]*3+'px';
    }
    document.getElementById('num').value=null;
}


//按钮所绑定的输入输出函数
function leftin(){
    var num=document.getElementById('num').value;
    if(num>=10&&num<=100&&arr.length<60){
        arr.unshift(num);
        add();
    }else if(arr.length>=60){
        alert("输入元素不能超过六十个");
    }else{
        alert('输入数值应为10~100');
    }
}
function rightin(){
    var num=document.getElementById('num').value;
    if(num>=10&&num<=100&&arr.length<60){
        arr.push(num);
        add();
    }else if(arr.length>=60){
        alert("输入元素不能超过六十个");
    }else{
        alert('输入数值应为10~100');
    }
}
function leftout(){
    ele=arr.shift();
    add();
    alert(ele);
}
function rightout(){
    ele=arr.pop();
    add();
    alert(ele);
}


//绑定点击删除事件
var cont=document.getElementById('cont');
cont.addEventListener('click',function(e){
    var ele=e.target;
    for(i=0;i<cont.childNodes.length;i++){
        if(cont.childNodes[i]==ele){
        arr.splice(i,1);
        add();
        }
    }
})
//点击按钮开始排序
document.getElementById('sortbtn').addEventListener('click',function(){
    sortA(0,arr.length);
})
document.getElementById('ranbtn').addEventListener('click',function(){
    ranArr();
})