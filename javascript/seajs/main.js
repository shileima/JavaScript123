// JavaScript Document


define(function(require,exports){
	
	
	//require('logo.js').init();
	
	//require('menu.js').init();
	
	//require('foot.js').init();
	
	var aA = document.getElementsByTagName('a');
	var aDiv = document.getElementsByTagName('div');
	
	window.bBtn = true;
	
	window.onhashchange = function(){
		if(window.bBtn){
			window.location.reload();
		}
	};
	
	require('show.js').show( aA , aDiv );
	
	require('hide.js').hide( aA , aDiv );
	
});