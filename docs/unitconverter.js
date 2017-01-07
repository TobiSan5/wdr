



$(document).ready(function(){$("#btn1").click(function() {
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
  
  var val = +$("#value").val();
  console.log(val);
  var i_unit = +$("#inp_unit").val();
  console.log(val);    
  var o_unit = +$("#out_unit").val();
  console.log(val);
  var ikey = keyify(i_unit);
  console.log(val);
  var okey = keyify(o_unit);
  console.log(val);
  // var res = val * unitArray[okey][ikey]
  $("#result").val(111);
  $("#res_unit").val(o_unit);  
});});		

