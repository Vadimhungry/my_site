
let page = document.querySelector('.page');
let themeButon = document.querySelector('.theme-button');
themeButon.onclick = function () {
	page.classList.toggle('dark-theme');
};