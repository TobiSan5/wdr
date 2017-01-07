var unitArray = {};
unitArray["m"]["m2sPa_kg"] = 1.95e-10
function keyify(text_str){
  return text_str.replace("/\(\)", "_")
};
i_unit = i_unit.replace("/", "_");
o_unit = o_unit.replace("/", "_");


$(document).ready(function(){
    $("#calc_button").click(function() {
     	var val = +$("#value").val();
     	var i_unit = +$("#inp_unit").val();
		var o_unit = +$("#out_unit").val();
		$("#result").val(val);
		$("#res_unit").val(o_unit);
		}
	);
});		

/* No work..
function funcCalc(jQuery, val, i_unit, o_unit)
{
  var value = document.getElementById('value').value;
  var  inp_unit = document.getElementById('inp_unit').value; 
  var out_unit = document.getElementById('out_unit').value;
  var unitArray = {};
  unitArray.m.m2sPa_kg = 1.95e-10
  i_unit = i_unit.replace("/", "_");
  o_unit = o_unit.replace("/", "_");
  return unitArray[o_unit][i_unit] * 
}

$(document).ready(function(){
    $(".calc_button").click(
    function(){
          var val = +$(".value").val();
          var i_unit = +$(".inp_unit").val();
          var o_unit = +$(".out_unit").val();
          var res = funcCalc(val, i_unit, o_unit);
          Alert(res);
          $("#result").val(res);
   });
});
*/

// test writing with Firefox Web IDE (ctrl+s saves!)