
var new_string="";

function removeSpaces(string)
 {
    var j = 0;
    for (var i = 0; i < string.length; i++)
      if (string[i] !== " ") 
          new_string+= string[i];
    return new_string;
  }

  var string="nothing is impossible";
  var trimmed=removeSpaces(string);
  console.log(trimmed);
  