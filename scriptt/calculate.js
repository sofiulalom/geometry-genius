function calculateTrianglehandler() {
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText)
  
    
    const area = 0.5 * base * height;
   
    
    // triangle area value
    const triangleArea = document.getElementById('centi-miter');
    triangleArea.innerText = area;


}

// Rectangle funtion =>

function calculateRectangleArea() {
    const lengthInput = document.getElementById('ractangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText)
  

    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
   
    // rectangle multyful work
    const rArea = length * width;

    // rectangle result
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = rArea;
}

// Parallelogram function =>

function calculateParallelogramArea() {
    const baseInput = document.getElementById('parallelogram-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText)
    console.log(base)

    const heightInput = document.getElementById('parallelogram-height');
    const heightText = heightInput.value;
    const height = parseFloat(heightText)
    console.log(height)

    const pArea = base * height;

    const parallelogramArea = document.getElementById('Parallelogram-area');
    parallelogramArea.innerText = pArea;

}

// Rhombus function =>
function calcultateRhombusAre() {
    const distanseInput = document.getElementById('rhombus-base')
    const distanseText = distanseInput.value;
    const distanse = parseFloat(distanseText);
    console.log(distanse)

    const defarensInput = document.getElementById('rhombus-height');
    const defaranseText = defarensInput.value;
    const defaranse = parseFloat(defaranseText);
    console.log(defaranse)

    const rhArea = 0.5 * distanse * defaranse;

    const rhombusArea = document.getElementById('Rhombus-area');
    rhombusArea.innerText = rhArea;


}
// pantagon  function =>
function calculatePentagonArea() {
    const parseInput = document.getElementById('pentagon-base');
    const parseText = parseInput.value;
    const parse = parseFloat(parseText);
    console.log(parse)

    const baseInput = document.getElementById('pentagon-height');
    const baseText = baseInput.value;
    const base = parseFloat(baseText)
    console.log(base)
    const pentArea = 0.5 * parse * base;

                       
    const pentagonArea = document.getElementById('pentagon-area');
    pentagonArea.innerText = pentArea;
}

//  ellipse area
function calculateEllipseArea() {
    const addInput = document.getElementById('ellipse-add');
    const addText = addInput.value;
    const add = parseFloat(addText);
    console.log(add)

    const baseInput = document.getElementById('ellipse-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    console.log(base)

    const Ellipseadd = add * base;
    const ellipseArea = document.getElementById('ellipse-area');
    ellipseArea.innerText = Ellipseadd;
    

   

 }