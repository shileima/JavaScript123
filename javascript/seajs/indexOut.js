// JavaScript Document

define(function(require,exports){
	
	function init(aA,aDiv,hash){
	
		for(var i=0;i<aDiv.length;i++){
			if( aDiv[i].dataset.hash == 'index' ){
				startMove(aDiv[i],{width : 0 , height : 0},function(){
					
					window.location.hash = hash;
					
					require('show.js').show( aA , aDiv );
					
				});
			}
		}
	
	}
	
	exports.init = init;
	
});