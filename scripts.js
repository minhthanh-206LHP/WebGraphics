var img = new Image();
img.crossOrigin = 'anonymous';
img.src = './JujuXTzuYang.jpg';
var Scanvas = document.getElementById('Scanvas');
var Sctx = Scanvas.getContext('2d');
img.onload = function() {
  Sctx.drawImage(img, 0, 0);
  img.style.display = 'none';
};

var Neo-canvas = document.getElementById('Ncanvas');
var Neo-ctx = Neo-canvas.getContext('2d');
Neo-ctx.drawImage(img,0,0);