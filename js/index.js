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
	
	//word
	let spanword=document.querySelector('.spanword');
	let pp=document.querySelector('.brandtop>p');
	let i=0;
	
		t=setInterval(function(){
			pp.innerText=spanword.innerText.substring(0,i);
			i++;
			if(pp.innerText==spanword.innerText.length){
				clearInterval(t)
			}
		},60)
		
	
})