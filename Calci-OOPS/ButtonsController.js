// Button Controller containing all button-related functionalities
var buttonsController = function () {
    this.screenElement = "";
};

// OnClick event for the button 
buttonsController.prototype.btnClick = function (event) {
    var inputValue;
    if (typeof event === "object") {
        inputValue = event.target.value;
        this.screenElement = event.target.parentNode.previousSibling.previousSibling;
    } else {
        inputValue = event;
    }
};