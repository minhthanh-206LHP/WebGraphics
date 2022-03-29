var img = new Image();
img.crossOrigin = 'anonymous';
img.src = './JujuXTzuYang.jpg';
var Scanvas = document.getElementById('Scanvas');
var Sctx = Scanvas.getContext('2d');
img.onload = function() {
  Sctx.drawImage(img, 0, 0);
  img.style.display = 'none';
};

var NeoCanvas = document.getElementById('Neocanvas');
var NeoCtx = NeoCanvas.getContext('2d');
NeoCtx.drawImage(img,0,0);