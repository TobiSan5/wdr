function keyify(text_str){
	text_str = String(text_str).toLowerCase()
	text_str = text_str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "_");
	return text_str;  
};  
  
var unitArray = {
	'm': {
		'm2spa_kg': 1.95e-10
		}
	};


