//Variable declarations
var containerDiv = $(".container");
var daySchedule =
{
    startHour: 6,
    endHour: 19,
    

}




//Function Definition 
function renderDay(dayScheduleObject) {
    for (var i = dayScheduleObject.startHour; i < dayScheduleObject.endHour; i++){
        var hourBlockEl = renderHourBlock(i);

        containerDiv.append(hourBlockEl);
    }
}

function renderHourBlock(i) {
    var timeBlock = $("<div>");
    timeBlock.addClass("row border time-block");
    var id = "hour" + i
    timeBlock.data("hour", i);
    var hourBlock = $("<div>");
    hourBlock.addClass("col-2 hour")
    //TODO: Change hours
    hourBlock.text(i + ":00");
    var textBlock = $("<input>");
    textBlock.addClass("col-9 future");
    //TODO: Add appointment text
    textBlock.text("Example appointment");
    var saveButton = $("<button>");
    saveButton.text('🖫');
    saveButton.addClass("col-1 saveBtn");
    timeBlock.append(hourBlock);
    timeBlock.append(textBlock);
    timeBlock.append(saveButton);
    return timeBlock;
}
//TODO: Fix event logic to get data from input
//Event Handler
containerDiv.on("click", ".saveBtn", function(event){
    //gives hour that was clicked
    var hourClicked = $(this).parent().data("hour");
    var hourInput = $(this).siblings();
    //daySchedule[$(this).parent().data("hour")] = $(this).siblings().siblings[1].text;
    console.log(hourClicked);
    console.log(hourInput);
    console.log(daySchedule);
})

//Function Calls
renderDay(daySchedule);//change to array of hourBlocks
