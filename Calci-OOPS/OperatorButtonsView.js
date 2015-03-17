// Buttons Create Function to create the button layout for the calculator
var operatorbuttonsCreate = function (container, operatorModel, keysContainer) {
    var mainDivElement = document.getElementById("calculator");

    // Iterate over the buttons number JSON to create the layout for the calculator number buttons
    Object.keys(operatorModel.buttonsOperatorJSON).forEach(function (key) {
        var key = operatorModel.buttonsOperatorJSON[key];
        var oInputKey = document.createElement("input");
        oInputKey.className = key.Class;
        oInputKey.value = key.Value;
        oInputKey.type = key.Type;
        keysContainer.appendChild(oInputKey);
    });

    container.appendChild(keysContainer);
    mainDivElement.appendChild(container);
};
