

let hideElementClass = 'hide-element';
let showElementClass = 'show-element';

function elementToggleClass(elementNode, classText)
{
      elementNode.classList.add(classText);
}




let portfolioItems = document.querySelectorAll('.portfolio-item');

for(let i = 0; i < portfolioItems.length; i++)
{	

    let portfolioItem = portfolioItems[i];
	
    portfolioItem.addEventListener('mouseover', function(e){
		 let link1 =  portfolioItem.querySelector('.portfolio-item-link-wrapper');
	     link1.classList.toggle('show-element');
    });

	
	portfolioItem.addEventListener('mouseout', function(e){
		   let link1 =  portfolioItem.querySelector('.portfolio-item-link-wrapper');
	       link1.classList.toggle('show-element');
    });

}



//SITE-NAME DROW



let n=0;
let str = "РОЗРОБКА САЙТІВ І WEB - ДОДАТКІВ";
let str_2 = '';

function drewText(){
	str_2+=str.charAt(n);
	
	let siteName = document.querySelector('#site-name');
	siteName.innerHTML = '';
	siteName.innerHTML = '{ ' + str_2 + ' }';
	
	n++;
	
	if(n == str.length)
	{
		clearInterval(id);
	}

}

let id = setInterval(drewText, 100);



