const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");


context.font = "12px Arial"; 
context.fillStyle = "red"; 


const text = "S"; 
const textWidth = context.measureText(text).width;
const x = (canvas.width - textWidth) / 2;
const y = canvas.height / 2;


context.fillText(text, x, y);


const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
const pixels = imageData.data;

const hexData = [];
for (const i = 0; i < pixels.length; i += 4) {
    
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    
    
    const hexColor = "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
    
    hexData.push(hexColor);
}


const hexText = hexData.join("\n");


const blob = new Blob([hexText], { type: "text/plain" });


const downloadLink = document.getElementById("downloadLink");
downloadLink.href = URL.createObjectURL(blob);
