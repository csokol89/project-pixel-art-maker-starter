// Select color input
//Color value is stored in newColor
const color = document.getElementById('colorPicker');
color.addEventListener('change', function() {
  const newColor = color.value;
  console.log(newColor);
})

// Select size input
// Width and Height are stored in the grid array
let grid = [];

const height = document.getElementById('input_height');
let finalHeight = 0;
height.addEventListener('change', function() {
  finalHeight = height.value;
  grid.splice(0, 1, finalHeight);
  console.log(finalHeight);
})

const width = document.getElementById('input_width');
let finalWidth = 0;
width.addEventListener('change', function() {
  finalWidth = width.value;
  grid.splice(1, 1, finalWidth);
  console.log(finalWidth);
})

// When size is submitted by the user, call makeGrid()
//On submit event listener
//insertHTML

const table = document.querySelector('#pixel_canvas');
const form = document.querySelector('#sizePicker');

const formStop = form.addEventListener('click', function(e) {
  e.preventDefault();
});

function makeTable() {
  /*for (let h = 1; h <= grid[0]; h++) {
    for (let w = 1; w <= grid[1]; w++) {
      console.log('Width ran');
      return '<td></td>';
    }
    return '<tr></tr>';
  }*/
}

function makeGrid() {
  for (let h = 1; h <= grid[0]; h++) {
    for (let w = 1; w <= grid[1]; w++) {
      console.log('Width ran');
       table.innerHTML += '<td></td>';
    }
    console.log('Height ran');
     table.innerHTML += '<tr></tr>';
  }
}
