var canvas = document.createElement('canvas');
document.getElementById("container-img").appendChild(canvas);
var context = canvas.getContext('2d');
var img = new Image;
//img.crossOrigin = 'Anonymous';

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
    
    if ((img.height>1500) || (img.width >1500)) {
     canvas.height = img.height/4;
     canvas.width = img.width/4;
    
    } 


    else if ((1000<img.height<=1500) || (1000<img.width <=1500)) {
     canvas.height = img.height/3;
     canvas.width = img.width/3;
	
    } 
    else if ((700<img.height<=1000) || (700<img.width <=1000)) {
     canvas.height = img.height/2;
     canvas.width = img.width/2;
 	}

 	else{
     canvas.height = img.height;
     canvas.width = img.width;
 	}

    var pixel = 101- blocks.value;
    /// if in play mode use that value, else use slider value
    var size =  pixel * 0.01,

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

function sliderChange(val) {
    document.getElementById('output').innerHTML = val+"%";
}
document.getElementById('blocks').value = 50;

var fileName = "";
 
  $("#download-btn").on("click", function(e) {
    var fileExtension = fileName.slice(-4);
    if (fileExtension == ".jpg" || fileExtension == ".png") {
      var actualName = fileName.substring(0, fileName.length - 4);
    }
    download(canvas, actualName + "-edited.jpg");
  });

  $("#upload-file").on("change", function() {
    var file = document.querySelector("#upload-file").files[0];
    var reader = new FileReader();

    if (file) {
      fileName = file.name;
      reader.readAsDataURL(file);
    }

    reader.addEventListener(
      "load",
      function() {
        img = new Image();
        img.src = reader.result;
        let n = 1;
        img.onload = function() {

          if ((img.height>1500) || (img.width >1500)) {
     canvas.height = img.height/4;
     canvas.width = img.width/4;
     n =4;
    
    } 


    else if ((1000<img.height<=1500) || (1000<img.width <=1500)) {
     canvas.height = img.height/3;
     canvas.width = img.width/3;
    n =3;
    } 
    else if ((700<img.height<=1000) || (700<img.width <=1000)) {
     canvas.height = img.height/2;
     canvas.width = img.width/2;
    n =2;
    }

    else{
     canvas.height = img.height;
     canvas.width = img.width;
    }
          context.drawImage(img, 0, 0, img.width/n, img.height/n);
          $("#canvas").removeAttr("data-caman-id");
        };
      },
      false
    );
  });

function download(canvas, filename) {
  var e;
  var lnk = document.createElement("a");

  lnk.download = filename;

  lnk.href = canvas.toDataURL("image/jpeg", 0.8);

  if (document.createEvent) {
    e = document.createEvent("MouseEvents");
    e.initMouseEvent(
      "click",
      true,
      true,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    );
    lnk.dispatchEvent(e);
  } else if (lnk.fireEvent) {
    lnk.fireEvent("onclick");
  }
}
