// Display Controller for the display device
var displayController = function () 
{
	this.display = function (outputValue, screenElement)
	{
		screenElement.value = outputValue;
	};
};
