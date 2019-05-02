var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
var context = canvas.getContext('2d');
var img = new Image;

function submitImageURL(){
img.src = document.getElementById("ImageURL").value;
img.onload = function() { 
  canvas.width = img.width;
  canvas.height = img.height;
  context.drawImage(img, 0, 0);// at this point the image is drawn to the canvas  
  pixelate();
};
}



function pixelate() {
    //dynamically adjust canvas size to the size of the uploaded image
    
 if ((img.height>1000) || (img.width >1000)) {
     canvas.height = img.height/2.5;
     canvas.width = img.width/2.5;
	
    } 
    else if ((500<img.height<=1000) || (500<img.width <=1000)) {
     canvas.height = img.height/1.5;
     canvas.width = img.width/1.5;
 	}

 	else{
     canvas.height = img.height;
     canvas.width = img.width;
 	}
    /// if in play mode use that value, else use slider value
    var size = (blocks.value) * 0.01,

        /// cache scaled width and height
        w = canvas.width * size,
        h = canvas.height * size;

    /// draw original image to the scaled size
    context.drawImage(img, 0, 0, w, h);
    
    /// then draw that scaled image thumb back to fill canvas
    /// As smoothing is off the result will be pixelated
    context.imageSmoothingEnabled = false;
    context.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
}


blocks.addEventListener('change', pixelate, false);