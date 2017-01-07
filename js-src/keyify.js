function keyify(text_str){
  text_str = text_str.toLowerCase()
  text_str = text_str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "_");
  return text_str;  
};


$(document).ready(function(){
    $("#calc_button").click(function() {
      var unitArray = {};
      unitArray.m = {};
      unitArray.m.m2spa_kg = 1.95e-10
     	var val = +$("#value").val();
     	var i_unit = +$("#inp_unit").val();
		  var o_unit = +$("#out_unit").val();
      var ikey = keyify(i_unit);
      var okey = keyify(o_unit);
    var res = val * unitArray[okey][ikey]
		$("#result").val(res);
		$("#res_unit").val(okey);
		}
	);
});		

/*
Exception: TypeError: unitArray.m is undefined
@Scratchpad/3:8:1
*/