// Numeric Button Number JSON having properties defined for all the calculator number buttons 
var numericbuttonsModel = function (size, className, material, type) {
    buttonsModel.call(this, size, className, material);
    this.type = type;
    this.buttonsNumberJSON = 
        {
            "Zero": 
			{
				"Name": "Zero",
				"Value": "0",
				"Size": this.size,
				"Class": this.class,
				"Type": this.type,
				"MaterialsUsed": this.materialsUsed
                },
 			"One": 
			{
				"Name": "One",
				"Value": "1",
				"Size": this.size,
				"Class": this.class,
				"Type": this.type,
				"MaterialsUsed": this.materialsUsed
                },
		    "Two": 
		   {
				"Name": "Two",
				"Value": "2",
				"Size": this.size,
				"Class": this.class,
				"Type": this.type,
				"MaterialsUsed": this.materialsUsed
            },
			"Three": 
			{
				"Name": "Three",
				"Value": "3",
				"Size": this.size,
				"Class": this.class,
				"Type": this.type,
				"MaterialsUsed": this.materialsUsed
                },
			"Four": 
			{
				"Name": "Four",
				"Value": "4",
				"Size": this.size,
				"Class": this.class,
				"Type": this.type,
			    "MaterialsUsed": this.materialsUsed
                },
		    "Five": 
		    {
			    "Name": "Five",
			    "Value": "5",
			    "Size": this.size,
			    "Class": this.class,
			    "Type": this.type,
			    "MaterialsUsed": this.materialsUsed
                },
		    "Six": 
		    {
				"Name": "Six",
				"Value": "6",
				"Size": this.size,
				"Class": this.class,
				"Type": this.type,
				"MaterialsUsed": this.materialsUsed
                },
			"Seven": 
			{
				"Name": "Seven",
				"Value": "7",
				"Size": this.size,
				"Class": this.class,
				"Type": this.type,
				"MaterialsUsed": this.materialsUsed
                },
			"Eight": 
			{
				"Name": "Eight",
				"Value": "8",
				"Size": this.size,
				"Class": this.class,
				"Type": this.type,
				"MaterialsUsed": this.materialsUsed
                },
			"Nine": 
			{
				"Name": "Nine",
				"Value": "9",
				"Size": this.size,
				"Class": this.class,
				"Type": this.type,
				"MaterialsUsed": this.materialsUsed
                }
	};
};