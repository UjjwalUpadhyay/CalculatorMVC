// Button Controller containing all button-related functionalities
var operatorbuttonsController = function () {
     this.screenElement = "";
};

// OnClick event for the button
operatorbuttonsController.prototype.btnClick = function (event) {
    var inputValue;
    if (typeof event === "object") {
        inputValue = event.target.value;
        this.screenElement = event.target.parentNode.previousSibling.previousSibling;
    } else {
        inputValue = event;
    }

    if (isNaN(inputValue)) {
        calculatorObject.useOperator(this.screenElement, inputValue);
    }
};