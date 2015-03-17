// Calculator View 
var calculatorCreate = function (numericbuttonsModelObject, operatorbuttonsModelObject)
{ 	
	var mainDivElement = document.getElementById("calculator");
    var oContainer = document.createElement("div");
    //var numericbuttonsModelObject = new numericbuttonsModel("30", "screen", "plastic", "button");
    //var operatorbuttonsModelObject = new operatorbuttonsModel ("30", "screen", "plastic", "button");
    var keysContainer = document.createElement("div");
    keysContainer.className = "keys";
    
    oContainer.className = "calciClass";
    createDisplay (oContainer);
    buttonsCreate (oContainer);
    numericbuttonsCreate (oContainer, numericbuttonsModelObject, keysContainer);
    operatorbuttonsCreate (oContainer, operatorbuttonsModelObject, keysContainer);
}
