$(document).ready(function(){
	
	$(window).load(function() {
	    c = new Carousel('ul.slides');
	    c.centerElement(c.$el.children().eq(2));
	    var links = {
	        '.jim': '.one',
	        '.craig': '.two',
	        '.micah': '.three',
	        '.cory': '.four',
	        '.doug': '.five',
	        '.billy': '.six',
	        '.eric': '.seven'
	    }
	    for(sel in links) {
	        c.hookUp(sel, links[sel]);
	    }
	})
});