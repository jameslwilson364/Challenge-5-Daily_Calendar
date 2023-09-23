// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// get a handle on objects
var scheduleContainer = $('#scheduleContainer');
var timeArray = $(["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]);
var timeArrayInts = $([9,10,11,12,13,14,15,16,17]);
var currentTime = dayjs().hour();
console.log(timeArray.length);
console.log(timeArrayInts.length);
console.log(currentTime);
// loop function to create blocks for hours 9-5 need to color code each time block

for (i=0; i < timeArrayInts.length; i++) {
  
  $(scheduleContainer).append('<div id=timeArrayLine class="row time-block past"></div>');
  var timeArrayLine = $('#timeArrayLine');
  $(timeArrayLine).append('<div class="col-2 col-md-1 hour text-center py-3">'+  timeArray[i] + '</div>');
  $(timeArrayLine).append('<textarea class="col-6 col-md-10 description" rows=3></textarea>');
  $(timeArrayLine).append('<button class="btn saveBtn col-2 col-md-1" aria-label=save><i class="fas fa-save" aria-hidden=true></i></button>');
  
  if (currentTime > timeArrayInts[i]) {
    console.log(timeArrayInts[i]);
    // $(scheduleContainer).append('<div id=timeArrayLine class="row time-block past"></div>');
    
  } else if (currentTime === timeArrayInts[i]) {
    // $(scheduleContainer).append('<div id=timeArrayLine class="row time-block present"></div>');
    
  } else if (currentTime < timeArrayInts[i]){
    // $(scheduleContainer).append('<div id=timeArrayLine class="row time-block future"></div>');
    
  }
  

  console.log(timeArray[i]);
  console.log(scheduleContainer);
  console.log(timeArrayInts[i]);
}

// capture events in each timeblock in local storage on button click and store them in the block
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
