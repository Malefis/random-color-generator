var colorOutput = document.getElementById("colorOutput").style;
  var hex = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'];
$( "#createHex" ).click(function() {
var codeWithoutHash = [];
for (i = 0; i < 6; i++) {
    var logMe = hex[Math.floor(Math.random() * hex.length)];
codeWithoutHash.push(logMe);
}
var output ='#'+codeWithoutHash.join('')
$( "#output" ).html(output);
colorOutput.backgroundColor = output;
});