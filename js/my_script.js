/**onst gridElement = document.getElementById('grid');

for (let index = 0; index < 64; index++) {
    const actualCell = createElement('div', 'cell');

    actualCell.addEventListener('click', function(){
        actualCell.classList.toggle('selected');
    });

    gridElement.appendChild(createElement('div', 'cell'))
}


/**
 * Functions
 */

/**
 * Function that creates a custom HTML element with the given tag and classes (as a string)
 *
 * 
 */


    const grid = document.getElementById("grid") ;

     for (let x = 1 ; x <= 100 ; x++) {
       const cellElement = createElement ( "div" , "cell");
       cellElement.addEventListener ( "click", function() {
        cellElement.classList.toggle ("cell-color");
        
        console.log(x);
       }
       );
  
       const number = document.createElement ("cell");
       number.append(x);
       cellElement.appendChild (number);
       grid.appendChild(cellElement );
       
    } 
    function createElement(tagName, className){
      const cellElement = document.createElement(tagName);
      cellElement.className = className;
      return cellElement;
  }


  

 
 