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
  edgeSobel(this);
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

function gray(img) {
	var imageData = Sctx.getImageData(0,0,img.width,img.height);
	var data = imageData.data;
	for (var i = 0; i < data.length; i += 4) {
		var lightness = parseInt((data[i] + data[i+1] + data[i+2]) / 3);
		data[i] = lightness;
		data[i+1] = lightness;
		data[i+2] = lightness;
	}
	//NeoCtx.putImageData(imageData,0,0);
	return imageData;
}

function edgeSobel(img) {
	var imageData = Sctx.getImageData(0,0,img.width,img.height);
	var dstImageData = NeoCtx.createImageData(img.width,img.height);
	var data = imageData.data;
	var dstData = dstImageData.data;
	var row = img.width * 4;
	for (var i = row + 4; i <= data.length - row - 4; i += 4) {
		var gradX = -data[i - row - 4] + data[i - row + 4] -2 * data[i - 4] + 2 * data[i + 4] -data[i + row - 4] + data[i + row + 4];
		var gradY = -data[i - row - 4] - 2*data[i - row] - data[i - row + 4] + data[i + row - 4] + 2*data[i + row] + data[i + row + 4];

		var absX = Math.abs(gradX);
		var absY = Math.abs(gradY);
		var sum = absY ;
		if (sum > 255) {
			sum = 255;
		}
		if (sum < 0) {
			sum = 0;
		}
		sum = 255 - sum;
		dstData[i] = sum;
		dstData[i+1]=sum;
		dstData[i+2]=sum;
	}
	NeoCtx.putImageData(dstImageData,0,0);
}