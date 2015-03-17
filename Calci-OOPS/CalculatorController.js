// Calculator Controller containing controller functions for the calculator
var calculatorController = function ()
{
	this.screenElement = "";
	this.calculatorElement = document.getElementById("calculator");
    this.calculationFinished = false;
    this.isNumValue1Done = false;
    this.isNumValue2Done = false;
    this.numValue1 = 0;
    this.numValue2 = 0;
    this.currentSymbol = "";
    
    var calculatorID = this.calculatorElement;
	var result = "";
    var numericbuttonsModelObject = new numericbuttonsModel("30", "button key", "plastic", "button"); 
    var operatorbuttonsModelObject = new operatorbuttonsModel("30", "button operator", "plastic", "button");
    var calculatorCreateObject = new calculatorCreate(numericbuttonsModelObject, operatorbuttonsModelObject);
	var numericbuttonsControllerObject = new numericbuttonsController();
    var operatorbuttonsControllerObject = new operatorbuttonsController();
    
	// Calls Button Controller's OnClick functsionality on click of button
	calculatorID.onclick = function (event)
	{
	 	if (event.target.classList.contains("button")) {
                if (!isNaN(event.target.value))
            	   numericbuttonsControllerObject.btnClick(event);
                else
                   operatorbuttonsControllerObject.btnClick(event);
        	}
     };

     // Addition operation 
	 this.sumOperation = function (numValue1, numValue2)
     {
     	result = numValue1 + numValue2;
     	return result;
     };

     // Subtraction operation 
	 this.subtractionOperation = function (numValue1, numValue2)
     {
     	result = numValue1 - numValue2;
     	return result;
     };
     
	 // Division operation 
     this.divisionOperation = function (numValue1, numValue2)
     {
     	result = numValue1 / numValue2;
     	return result;
     };

	 // Multiplication operation 
     this.multilpicationOperation = function (numValue1, numValue2)
     {
     	result = numValue1 * numValue2;
     	return result;
     };

     // Modulus operation 
	 this.modulusOperation = function (numValue1, numValue2)
     {
     	result = numValue1 % numValue2;
     	return result;
     };
     
	 // Clear functionality
     this.clear = function (event)
     {
	    var screenElement = this.screenElement;        
        if (event.target.parentNode.childNodes[0].id === "displayElement") 
        screenElement = event.target.parentNode.childNodes[0];
		else if (event.target.parentNode.previousSibling.previousSibling.id === "displayElement")
		screenElement = event.target.parentNode.previousSibling.previousSibling;
        else if (typeof event === undefined)
        screenElement = screenElement;

        screenElement.value = "";
        this.numValue1 = 0;
        this.numValue2 = 0;
        this.currentSymbol = "";
        this.isNumValue1Done = false;
        this.isNumValue2Done = false;
    };
 	
	// Appending digits for numValue1 and numValue2
     this.inputDigits = function (event, screenElement)
     {
    	var num = 0;
		if (typeof event === "object") {
            num = event.target.value;
        } else {
            num = event;
        }
        if (screenElement.value == "" && num == "0") {
            return;
        } else if (this.calculationFinished == true) {
            screenElement.value = num;
            this.calculationFinished = false;
        } else {
            screenElement.value += num;
        }
     };
    
this.operateNumber = function(screenElement, inputValue)
{
var displayControllerObject = new displayController();

var output = "";
if ((this.calculationFinished === true) && (!isNaN(this.currentSymbol))) {
	            this.clear(event);
                this.calculationFinished = false;
		        this.isNumValue1Done = false;
                displayControllerObject.display(inputValue, screenElement);
            } 
	else if ((this.calculationFinished === true) && (isNaN(this.currentSymbol))) {
                this.isNumValue1Done = true;
                output = this.numValue1 + inputValue;
                this.calculationFinished = false;
                displayControllerObject.display(output, screenElement);
            } 
        else if (this.currentSymbol === '') {
                this.inputDigits(event, screenElement);
            }
        else if (this.currentSymbol != '' && !this.isNumValue1Done) {
                this.isNumValue1Done = true;
                output = screenElement.value  + inputValue;
                this.numValue2 = inputValue;
                displayControllerObject.display(output, screenElement);
            }
        else if (this.currentSymbol != '' && this.isNumValue1Done) {
                this.numValue2 = this.numValue2 + inputValue.toString();
                output = screenElement.value + inputValue.toString();
                displayControllerObject.display(output, screenElement);
            }	
};
        
// PCB Controller Operator functionality
this.useOperator = function (screenElement, inputValue)
{
    var displayControllerObject = new displayController();
    var output = "";
    switch (inputValue)
    {   
        case "+":
        case "-":
        case "*":
        case "/":
        case "%":
            if (this.currentSymbol != "" && this.numValue2 !== 0)
            {
                this.useOperator(screenElement, "=");
            }
            
            this.numValue1 = screenElement.value;
//            buttonsControllerObject = this.numValue1;
            
            if (this.currentSymbol != "" && this.numValue2 === 0)
            {
                output = screenElement.value.substring(0,screenElement.value.length - 1) + inputValue;
                displayControllerObject.display(output, screenElement);
                this.currentSymbol = inputValue;
            }
            else
            {
                this.currentSymbol = inputValue;
                displayControllerObject.display(screenElement.value + this.currentSymbol, screenElement);
            }
            if (this.currentSymbol != "" && this.numValue2 !== 0)
            this.numValue2 = 0;
            this.calculationFinished = false;
            break;
         case "=":
            switch(this.currentSymbol)
            {
			    // Operator is a divide operator
                case "/":
                    if (parseInt(this.numValue2))
                            {
                                displayValue = parseInt(this.divisionOperation(parseInt(this.numValue1) , parseInt(this.numValue2)),0);
                            }
                            break; 
				// Operator is a multiplication operator
                case "*":
                            displayValue = this.multilpicationOperation(parseInt(this.numValue1) , parseInt(this.numValue2));
                            break;
				// Operator is a addition operator
                case "+":
                            displayValue = this.sumOperation(parseInt(this.numValue1) , parseInt(this.numValue2));
                            break;
				// Operator is a subtraction operator
                case "-":
                            displayValue = this.subtractionOperation(parseInt(this.numValue1) , parseInt(this.numValue2));
                            break;
                // Operator is a modulus operator
				case "%":
                            displayValue = this.modulusOperation(parseInt(this.numValue1) , parseInt(this.numValue2));
                            break;
                default: 
                            displayValue =  "";
                            break;
              };
            displayControllerObject.display(displayValue, screenElement);

            this.numValue1 = screenElement.value;
            this.isNumValue1Done = false;
            this.calculationFinished = true;
            this.currentSymbol = '';
            break;
	    case "C":
                  this.clear(event);
                  break;
            }  
    };
     
 }; 

