// Button Operator JSON having properties defined for all the calculator operator buttons
var operatorbuttonsModel = function (size, className, material, type) {
    buttonsModel.call(this, size, className, material);
    this.type = type;
    this.buttonsOperatorJSON = 
         {
              "Add": 
				{
					"Name": "Add Operator",
					"Value": "+",
					"Size": this.size,
					"Class": this.class,
					"Type": this.type,
					"MaterialsUsed": this.materialsUsed
                },
 			"Subtract": 
				{
					"Name": "Subtract Operator",
					"Value": "-",
					"Size": this.size,
					"Class": this.class,
					"Type": this.type,
					"MaterialsUsed": this.materialsUsed
                },
			"Multiply": 
				{
					"Name": "Multiplication Operator",
					"Value": "*",
					"Size": this.size,
					"Class": this.class,
					"Type": this.type,
					"MaterialsUsed": this.materialsUsed
                },
			"Divide": 
				{
					"Name": "Division Operator",
					"Value": "/",
					"Size": this.size,
					"Class": this.class,
					"Type": this.type,
					"MaterialsUsed": this.materialsUsed
                },
			"Modulus": 
				{
					"Name": "Mod Operator",
					"Value": "%",
					"Size": this.size,
					"Class": this.class,
					"Type": this.type,
					"MaterialsUsed": this.materialsUsed
                },
		
			"Equals": 
				{
					"Name": "Equals Operator",
					"Value": "=",
					"Size": this.size,
					"Class": this.class,
					"Type": this.type,
					"MaterialsUsed": this.materialsUsed
                }
	};
};