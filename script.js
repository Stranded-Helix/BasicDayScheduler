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
    //var currentTime = moment().format("H");
    //var hourBlockTime = moment().startOf("day").startOf(i)
    //hourBlockTime.format("LLLL")
    hourBlock.text(moment(i, "h").format("hA"));
    var textBlock = $("<input>");
    //decide what class to give past, present, future
    //var timeDifference = currentTime - hourBlockTime;
    //console.log("hourBlock: "+hourBlockTime);
    //console.log("time diff: "+timeDifference);
    //if(currentTime.)

    textBlock.addClass("col-9 future");
    if(daySchedule[i]){
        textBlock.val(daySchedule[i]);
        console.log("Proper Code");
    }
    else {
        console.log("got here");
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

