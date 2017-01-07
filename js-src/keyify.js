/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function keyify(text_str){
  text_str = text_str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "_");
/*  text_str = text_str.replace(/([.*+?^=!:${}()|\[\]\/\\])/, "_");
  text_str = text_str.replace(/([.*+?^=!:${}()|\[\]\/\\])/, "_");
  text_str = text_str.replace(/([.*+?^=!:${}()|\[\]\/\\])/, "_"); */
  return text_str;
  
};

res = keyify("kg/(msPa)");

$("#res_unit").val(res);
