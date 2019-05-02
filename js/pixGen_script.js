let canvas = document.getElementById("pixel_canvas");
let height = document.getElementById("input_height");
let width = document.getElementById("input_width");
let sizePicker = document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");
let remcolor = document.getElementById("btn");
color.addEventListener("click", function(){});
let row;
let cell;
sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};
function makeGrid() {
    {
        for (let r=0; r<height.value; r++){
        row = canvas.insertRow(r);
        for (let c=0; c<width.value; c++){
            cell = row.insertCell(c);
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
function clearGrid(){
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}
function fillSquare () {
    this.setAttribute("style", `background-color: ${color.value}`);
}


