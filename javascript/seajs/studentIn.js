// JavaScript Document

define(function(require,exports){
	
	function init(obj){
		
		startMove(obj,{width : 200 , height : 400},function(){
			
			window.bBtn = true;
			
		});
		
	}
	
	exports.init = init;
	
});