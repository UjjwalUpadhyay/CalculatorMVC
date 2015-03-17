// Buttons Create Function to create the button layout for the calculator
var buttonsCreate = function (container)
{ 	
	var mainDivElement = document.getElementById("calculator");
        
    var oInputClear = document.createElement("input");
	oInputClear.type = "button";
    oInputClear.value = "C";
    oInputClear.className = "button clear";
    
    container.appendChild(oInputClear);
    mainDivElement.appendChild(container);
}
