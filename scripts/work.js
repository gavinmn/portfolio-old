
$(document).on("click", ".more-dropdown-ui", function(){
	
	if(!$(".more-dropdown-ui").hasClass("open")){	
		$(".more-dropdown-ui").addClass( "open" );
		$('.grid-container-ui-icons-extra').slideToggle(500).css('display', 'grid');
		$('.grid-container-ui-icons').css('margin-bottom', '1rem');
		$(".more-dropdown-ui").text("Less");
			
	} else {
		$(".more-dropdown-ui").removeClass( "open" );
		$('.grid-container-ui-icons-extra').slideToggle(500);
		$('.grid-container-ui-icons').css('margin-bottom', '.5rem');
		$(".more-dropdown-ui").text("More");
	};
	
});

$(document).on("click", ".more-dropdown-illustration", function(){
	
	if(!$(".more-dropdown-illustration").hasClass("open")){
		$(".more-dropdown-illustration").addClass( "open" );
		$('.grid-container-illustration-design-extra').slideToggle(500).css('display', 'grid');
		$('.grid-container-illustration-design').css('margin-bottom', '1rem');
		$(".more-dropdown-illustration").text("Less");
			
	} else {
		$(".more-dropdown-illustration").removeClass( "open" );
		$('.grid-container-illustration-design-extra').slideToggle(500);
		$('.grid-container-illustration-design').css('margin-bottom', '.5rem');
		$(".more-dropdown-illustration").text("More");
	};
	
});
