window.onload = function(){
    var img = new Image();
    img.onload = function(){
        invertColor(this);
    };
    img.src = "JujuXTzuYang.jpg";
    img.crossOrigin = 'anonymous';
};

function invertColor(img)
{
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");

    context.drawImage(img,0,0);

    //context.drawImage(img,img.width,0);
    var imageData = context.getImageData(0,0,img.width,img.height);
    var data = imageData.data;
    for (var i = 0;i< data.length;i+=4)
    //{
    //    data[i] = 255-data[i];
    //    data[i+1]=255-data[i+1];
    //    data[i+2]=255-data[i+2];
    //    data[i+3]=255;
    //}
    context.putImageData(imageData,img.width,0);
}
