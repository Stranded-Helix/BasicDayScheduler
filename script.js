var containerDiv = $(".container");

var startTime = 6;
var endTime = 19;

function createTimeBlock(start, end) {
    for (var i = start; i < end; i++){
        var timeBlock = $("<div>");
        timeBlock.addClass("row border time-block");
        var id = "hour" + i
        timeBlock.addId(id);
        var hourBlock = $("<div>");
        hourBlock.addClass("col-2 hour")
        hourBlock.text(i + ":00");
        var textBlock = $("<div>");
        textBlock.addClass("col-9 future");
        textBlock.text("Example appointment");
        var saveButton = $("<button>");
        var buttonSpan = $("<span>");
        buttonSpan.addClass("glyphicon-floppy-disk")
        saveButton.addClass("col-1 saveBtn");




        timeBlock.append(hourBlock);
        timeBlock.append(textBlock);
        timeBlock.append(saveButton);
        containerDiv.append(timeBlock);
    }
}


//Function Calls
createTimeBlock(startTime, endTime);