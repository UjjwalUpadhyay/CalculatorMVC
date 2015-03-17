// Display Model defining the properties for the display device
var display = function (size, className, material, type) {
    this.size = size;
    this.class = className;
    this.materialsUsed = material;
    this.type = type;

    this.displayJSON = {
        "Display1":
            {
                "Name": "LCD Display",
                "ID": "displayElement",
                "Size": this.size,
                "Class": this.class,
                "Type": this.type,
                "MaterialsUsed": this.materialsUsed
            }
    };
};