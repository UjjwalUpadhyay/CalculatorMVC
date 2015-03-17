// Create display screen in the calculator
var createDisplay = function (container) {
    var mainDivElement = document.getElementById("calculator");
    var displayObject = new display("20", "screen", "glass", "readOnly");

    var displayElement = document.createElement("input");
    displayElement.id = displayObject.displayJSON.Display1.ID;
    displayElement.className = displayObject.displayJSON.Display1.Class;
    displayElement.size = displayObject.displayJSON.Display1.Size;
    displayElement.readOnly = displayObject.displayJSON.Display1.Type;
    
    container.appendChild(displayElement);
    mainDivElement.appendChild(container); 
};
