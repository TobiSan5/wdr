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

function runConvert(val, i_unit, o_unit) {
  var i_key = keyify(i_unit);
  var o_key = keyify(o_unit);
  var res = val * unitArray[o_key][i_key]
  return res
};

$(document).ready(function(){
	var p1 = $("#value").val()
	var p2 = $("#inp_unit").val()
	var p3 = $("#out_unit").val()
	$("#btn1").click(function(){
		var result = runConvert(p1, p2, p3); 
	});
	$("#result").val(result);
	$("#res_unit").val(p3);  
});

