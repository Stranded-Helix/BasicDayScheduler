//Variable declarations
var containerDiv = $(".container");

var startHour = 6;
var endHour = 19;

//Function Definition 
function renderDay(start, end) {
    for (var i = start; i < end; i++){
        var hourBlockEl = renderHourBlock(i);

        containerDiv.append(hourBlockEl);
    }
}

function renderHourBlock(i) {
    var timeBlock = $("<div>");
    timeBlock.addClass("row border time-block");
    var id = "hour" + i
    timeBlock.attr("id", id);
    var hourBlock = $("<div>");
    hourBlock.addClass("col-2 hour")
    //TODO: Change hours
    hourBlock.text(i + ":00");
    var textBlock = $("<input>");
    textBlock.addClass("col-9 future");
    //TODO: Add appointment text
    textBlock.text("Example appointment");
    var saveButton = $("<button>");
    var buttonSpan = $("<span>");
    buttonSpan.text('🖫');
    saveButton.addClass("col-1 saveBtn");
    saveButton.append(buttonSpan);
    timeBlock.append(hourBlock);
    timeBlock.append(textBlock);
    timeBlock.append(saveButton);
    return timeBlock;
}

//Event Handler
containerDiv.on("click", ".container", function(event){
    //save data
})

//Function Calls
renderDay(startHour, endHour);