const burger = document.querySelector('.header__burger');
burger.onclick = function (){
	console.log(1);
	burger.classList.toggle('active');
	document.querySelector('.header__menu').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
}

document.querySelector('.about__link').onclick = function(e){
	let a = document.querySelector('.about__text2');
	a.classList.toggle('active');
	if(a.classList.contains('active')){
		e.target.textContent = 'HIDE';
	} else {
		e.target.textContent = 'READ MORE';
	}
	
}

document.querySelectorAll('a').onclick = function(e){
	e.preventDefault();
}