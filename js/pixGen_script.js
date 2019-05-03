var canvas = document.getElementById("pixel_canvas");
var height = document.getElementById("input_height");
var width = document.getElementById("input_width");
var sizePicker = document.getElementById("sizePicker");
var color = document.getElementById("colorPicker");
var lheight = document.getElementById("input_height_l");
var lwidth = document.getElementById("input_width_l");
color.addEventListener("click", function(){});

sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
    grid1();
};

function makeGrid() {
    {   
        for (let r=0; r<height.value; r++){
        const row = canvas.insertRow(r);
        for (let c=0; c<width.value; c++){
            const cell = row.insertCell(c);
          
            
            cell.addEventListener("click", fillSquare);
            var bools = false;
  document.querySelector('#pixel_canvas').addEventListener('mousedown', function(){
    bools=true;
  });

  cell.addEventListener('mouseover', function(event){
    if(bools){
      event.target.style.backgroundColor=color.value;
      console.log(bools);
    }
  });
 cell.addEventListener('mouseup', function(){
   bools=false;
  });

             }
    
        }
    }
   
}
function grid1(){
   var pixel1 = document.getElementsByTagName('tr');
   console.log("tr done!! ");
  for(var i=0;i<pixel1.length;i++){
    pixel1[i].setAttribute("style", `height: ${lheight.value}px`);
       console.log("tr length done!! "+ i + lheight.value);

 }
  var pixel = document.getElementsByTagName('td');
  for(var i=0;i<pixel.length;i++){
    pixel[i].setAttribute("style", `width: ${lwidth.value}px`);
 }

}
function fillSquare () {
    this.setAttribute("style", `background-color: ${color.value}`);
}

function clearGrid(){
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}
