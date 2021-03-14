//Variable declarations
var containerDiv = $(".container");
var currentDayEl = $("#currentDay");
var daySchedule =
{
    startHour: 8,
    endHour: 17,
}




//Function Definition 
function renderDay(dayScheduleObject) {

    currentDayEl.text(moment().format("MMMM Do"))
       
        for (var i = dayScheduleObject.startHour; i <= dayScheduleObject.endHour; i++){
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
    var hourBlockTime = moment(i, "h");
    hourBlock.text(hourBlockTime.format("h A"));
    var textBlock = $("<input>");
    currentTime = moment();
    //Test time variable
    //currentTime = moment(12, "h");
    //decide what class to give past, present, future
    if(hourBlockTime.isBefore(currentTime)){
        textBlock.addClass("col-9 past");
    }
    else if(hourBlockTime.isSame(currentTime)){
        textBlock.addClass("col-9 present");
    }
    else {
        textBlock.addClass("col-9 future");
    }

    //adds scheduled event if found in localStorage
    if(daySchedule[i]){
        textBlock.val(daySchedule[i]);
        console.log("Schedule event found");
    }
    else {
        console.log("No schedule event found");
    }
    var saveButton = $("<button>");
    saveButton.text('🖫');
    saveButton.addClass("col-1 saveBtn");
    timeBlock.append(hourBlock);
    timeBlock.append(textBlock);
    timeBlock.append(saveButton);
    return timeBlock;
}

function checkLocalStorage() {
    if(localStorage.getItem("Schedule")){
        daySchedule = JSON.parse(localStorage.getItem("Schedule"))
        console.log("Local Storage Loaded")
    }
    else{
        console.log("No Local Storage Found");
    }

}
//Event Handler
containerDiv.on("click", ".saveBtn", function(event){
    //gives hour that was clicked
    var hourClicked = $(this).parent().data("hour");
    var hourInput = $(this).siblings("input").val();
    if(hourInput){
    daySchedule[hourClicked] = hourInput;
    console.log(daySchedule);
    localStorage.setItem("Schedule", JSON.stringify(daySchedule));
    }
})

//Function Calls
checkLocalStorage();
renderDay(daySchedule);//change to array of hourBlocks

