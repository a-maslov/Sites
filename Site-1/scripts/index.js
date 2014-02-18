/**
 * Created by Dennis Selkirk on 05/11/13.
 */

(function() {
	$('.js-slider').roundabout();
})();

$(document).ready(function() {
	$('.fc-quotes').quovolver({
		children : 'li',
		transitionSpeed : 600,
		autoPlay : false,
		equalHeight : false,
		navPosition : 'above',
		navPrev     : true,
		navNext     : true,
		navPrevText: "",
		navNextText: ""
	});
});

$(document).ready(function(){
	$(".in-beginning").click(function(){
		var curPos=$(document).scrollTop();
		var scrollTime=curPos/1.73;
		$("body,html").animate({"scrollTop":0},scrollTime);
	});
});