function loadStyleSheet(src){
	if (document.createStyleSheet) document.createStyleSheet(src);
	else {
		var stylesheet = document.createElement('link');
		stylesheet.href = src;
		stylesheet.rel = 'stylesheet';
		stylesheet.type = 'text/css';
		document.getElementsByTagName('head')[0].appendChild(stylesheet);
	}
}

function goToByScroll(id){
    $('#content').animate({scrollTop: $("#"+id).offset().top},'slow')

    return false
}

function changePage() {
	var elems = $('.activePage, .inactivePage')
		
	elems.toggleClass('activePage')
	elems.toggleClass('inactivePage')
}