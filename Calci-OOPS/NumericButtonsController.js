// Button Controller containing all button-related functionalities
var numericbuttonsController = function () {
    this.screenElement = "";
};

// OnClick event for the button
numericbuttonsController.prototype.btnClick = function (event) {
    var inputValue;
    if (typeof event === "object") {
        inputValue = event.target.value;
        this.screenElement = event.target.parentNode.previousSibling.previousSibling;
    } else {
        inputValue = event;
    }

    if (!isNaN(inputValue)) {
        calculatorObject.operateNumber(this.screenElement, inputValue);
    }
};