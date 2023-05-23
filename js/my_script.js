
/**
 * Function that creates a custom HTML element with the given tag and classes (as a string)
 *const resetButton = document.querySelector('button.reset-button');

resetButton.addEventListener('click', function(){
    distanceInputElement.value = "";
    ageSelectElement.value = "";
    outputElement.innerHTML = '<span class="italic-font">Generate a new ticket to see its price!</span>'
});
 * 
 */







    const createButton = document.getElementById("open-grid");
    createButton.addEventListener ("click", function openGrid() {

        
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
      }
    );
   
    const selectGrill = document.getElementById("select-button")
    selectGrill.addEventListener ("click", function(){

    });

    


    


  

 
 