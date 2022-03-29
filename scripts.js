var img = new Image();
img.crossOrigin = 'anonymous';
img.src = './JujuXTzuYang.jpg';
var Scanvas = document.getElementById('Scanvas');
var Sctx = Scanvas.getContext('2d');

var NeoCanvas = document.getElementById('Neocanvas');
var NeoCtx = NeoCanvas.getContext('2d');
//NeoCtx.drawImage(img,0,0);

img.onload = function() {
  Sctx.drawImage(img, 0, 0);
  img.style.display = 'none';
};



function invertColor(img) {
	var imageData = Sctx.getImageData(0,0,img.width,img.height);
	var data = imageData.data;
	for (var i = 0; i < data.length; i += 4) {
		data[i] = 255 - data[i];
		data[i + 1] = 255 - data[i+1];
		data[i + 2] = 255 - data[i+2];
		data[i + 3] = 255;
	}
	NeoCtx.putImageData(imageData,0,0);
}