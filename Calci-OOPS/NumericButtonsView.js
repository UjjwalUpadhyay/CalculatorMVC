// Buttons Create Function to create the button layout for the calculator
var numericbuttonsCreate = function (container, numericModel, keysContainer) {
    var mainDivElement = document.getElementById("calculator");

    // Iterate over the buttons number JSON to create the layout for the calculator number buttons
    Object.keys(numericModel.buttonsNumberJSON).forEach(function (key) {
        var key = numericModel.buttonsNumberJSON[key];
        var oInputKey = document.createElement("input");
        oInputKey.className = key.Class;
        oInputKey.value = key.Value;
        oInputKey.type = key.Type;
        keysContainer.appendChild(oInputKey);
    });

    container.appendChild(keysContainer);
    mainDivElement.appendChild(container);
};