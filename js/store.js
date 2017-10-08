window.addEventListener('load',function(){
	//nav
	let nli=document.querySelectorAll('.nav>li');
	let xiala=document.querySelectorAll('.nitem');
	nli.forEach(element =>{
		element.onmouseover=function(){
			let xiala=element.querySelector('.nitem');
			if(xiala!=null){
				let xialali=xiala.querySelectorAll('li');
				let nlih=xialali.length*40;
				animate(xiala,{height:nlih});

			}
		}
		element.onmouseout=function(){
			let xiala=element.querySelector('.nitem');
			if(xiala!=null){
				animate(xiala,{height:0});

			}
		}
		
	})
	//banner
	let banner=document.querySelector('.banner-body');
	let w=banner.offsetWidth;
	let bli=banner.querySelectorAll('.banner-body>li');
	let circle=document.querySelector('.banner-bottom');
	let cli=circle.querySelectorAll('li');
	let now=0,next=0;
	bli[0].style.left=0;
	cli[0].style.background='#fff';
	let t=setInterval(run,3000);
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(run,1000);
	}
	cli.forEach((element,index) => {
		element.onclick=function(){
			if(now==index){
				return;
			}
			bli[index].style.left=w+'px';
			animate(bli[now],{left:-w});
			animate(bli[index],{left:0});
			cli[now].style.background='';
			cli[index].style.background='#fff';
			now=next=index;
		}
	})
	function run(){
		next++;
		if(next>=bli.length){
			next=0;
		}
		bli[next].style.left=w+'px';
		animate(bli[next],{left:0});
		animate(bli[now],{left:-w});
		cli[next].style.background='#fff';
		cli[now].style.background='';
		now=next;
	}
	
	//food
	let foodul=document.querySelectorAll('.mbody>ul');
	let pageli=document.querySelectorAll('.page>a');
	let btn=document.querySelectorAll('.page>button');
	let bebtn=document.querySelector('.beforeb');
	let abbtn=document.querySelector('.aboveb');
	let fnow=0,fnext;
	console.log(abbtn)
	foodul[0].style.display='block';
	pageli[0].style.background='#fff';
	for(let i=0;i<pageli.length;i++){
			pageli[i].onclick=function(){
				for(let j=0;j<pageli.length;j++){
					pageli[j].style.background='#fff';
					foodul[j].style.display='none';
					pageli[j].style.color='#000';

				}
			pageli[i].style.background='#C8000A';
			pageli[i].style.color='#fff';
			foodul[i].style.display='block';
			fnow=i;
		}
	}
	bebtn.onclick=function(){
			fnext=fnow;
			fnow--;
			if(fnow<0){
				fnow=0;
				return;
			}
			pageli[fnow].style.background='#C8000A';
			pageli[fnow].style.color='#fff';
			foodul[fnow].style.display='block';

			pageli[fnext].style.background='#fff';
			foodul[fnext].style.display='none';
			pageli[fnext].style.color='#000';
		}
	
	abbtn.onclick=function(){
			fnext=fnow;
			fnow++;
			if(fnow>=pageli.length){
				fnow=pageli.length-1;
				return;
			}
			pageli[fnow].style.background='#C8000A';
			pageli[fnow].style.color='#fff';
			foodul[fnow].style.display='block';

			pageli[fnext].style.background='#fff';
			foodul[fnext].style.display='none';
			pageli[fnext].style.color='#000';
		}
		btn[0].onclick=function(){
			fnow=0;
			for(let i=0;i<pageli.length;i++){
				pageli[i].style.background='#fff';
				foodul[i].style.display='none';
				pageli[i].style.color='#000';

			}
			pageli[fnow].style.background='#C8000A';
			pageli[fnow].style.color='#fff';
			foodul[fnow].style.display='block';

		}
		btn[btn.length-1].onclick=function(){
			fnow=pageli.length-1;
			for(let i=0;i<pageli.length;i++){
				pageli[i].style.background='#fff';
				foodul[i].style.display='none';
				pageli[i].style.color='#000';

			}
			pageli[fnow].style.background='#C8000A';
			pageli[fnow].style.color='#fff';
			foodul[fnow].style.display='block';
		}
		
		

	
})