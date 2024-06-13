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