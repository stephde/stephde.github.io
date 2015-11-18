function goToByScroll(id){
    $('#content').animate({scrollTop: $("#"+id).offset().top},'slow')

    return false
}

function changePage() {
	var elems = $('.activePage, .inactivePage')
		
	elems.toggleClass('activePage')
	elems.toggleClass('inactivePage')
}