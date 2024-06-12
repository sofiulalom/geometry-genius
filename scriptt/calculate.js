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