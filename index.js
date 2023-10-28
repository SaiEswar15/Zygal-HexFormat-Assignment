var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


ctx.font = "12px Arial"; 
ctx.fillStyle = "red"; 


var text = "S"; 
var textWidth = ctx.measureText(text).width;
var x = (canvas.width - textWidth) / 2;
var y = canvas.height / 2;


ctx.fillText(text, x, y);


var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
var pixels = imageData.data;

var hexData = [];
for (var i = 0; i < pixels.length; i += 4) {
    
    var r = pixels[i];
    var g = pixels[i + 1];
    var b = pixels[i + 2];
    
    
    var hexColor = "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
    
    hexData.push(hexColor);
}


var hexText = hexData.join("\n");


var blob = new Blob([hexText], { type: "text/plain" });


var downloadLink = document.getElementById("downloadLink");
downloadLink.href = URL.createObjectURL(blob);
