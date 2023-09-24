// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// get a handle on objects
var scheduleContainer = $('#scheduleContainer');
var currentDayGrab = $('#currentDay');
var timeArray = $(["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]);
// var userEntry = $('<div>');
var timeArrayInts = $([9,10,11,12,13,14,15,16,17]);
var currentTime = dayjs().hour();
var currentDay = dayjs().format('dddd MMMM DD YYYY');
var currentTimeInt = parseInt(currentTime);
console.log(currentDay);
console.log(currentTime);
console.log(timeArray.length);
console.log(timeArrayInts.length);

// loop function to create blocks for hours 9-5 need to color code each time block
function scheduleForm() { 
  $(currentDayGrab).text(currentDay);
  $(scheduleContainer).append('<div id=timeArrayLine ></div>');
  for (i=0; i < timeArrayInts.length; i++) {
      var timeArrayLine = $('#timeArrayLine');
      var userEntry = $('#userEntry');
      var timeArrayLineTest = $('<div id=timeArrayLineTest class="row text-block past">');
      console.log(currentTime);
      timeArrayLine.append(timeArrayLineTest);
      $(timeArrayLineTest).append('<div class="col-2 col-md-1 hour text-center py-4 border border-dark" id=timeBlock>'+  timeArray[i] + '</div>');
      $(timeArrayLineTest).append('<textarea class="col-6 col-md-10 description border border-dark" rows=3 id=userEntry></textarea>');
      $(timeArrayLineTest).append('<button id=actionButton class="btn saveBtn col-2 col-md-1 border border-dark" aria-label=save><i class="fas fa-save" aria-hidden=true></i></button>');
      var timeCheck = parseInt(timeArrayInts[i]);
      for (j=0; j < timeArrayLineTest.length; j++) {
        console.log(timeArrayLineTest[j]);
        console.log(timeCheck);
        if (timeCheck < currentTimeInt) {
          //$(timeArrayLineTest.children[3]).attr('style', 'background-color:#77dd77');
          $(timeArrayLineTest).attr('style', 'background-color:#77dd77');
        } else if (timeArrayInts[i] === currentTimeInt) {
          $(userEntry[i]).attr('style', 'background-color:#ff6961');
        } else {
          $(userEntry[i]).attr('style', 'background-color: #d3d3d3');
        }
      }
    // var userEntry = $('<div class="col-2 col-md-1 hour text-center py-4 border border-dark" id=timeBlock>'+  timeArray[i] + '</div>');
    // var timeBlock = $('<#timeBlock>');
    // timeBlock = timeArrayInts[i];
    // console.log(timeBlock);

    
    // if (timeArrayInts[i] > currentTimeInt) {
    //   $(userEntry).attr('style', 'background-color:#77dd77');
    // } else if (timeArrayInts[i] === currentTimeInt) {
    //   $(userEntry).attr('style', 'background-color:#ff6961');
    // } else {
    //   $(userEntry).attr('style', 'background-color: #d3d3d3');
    // }
    
   
    // $(timeArrayLine).append('<div class="col-2 col-md-1 hour text-center py-4 border border-dark" id=timeBlock>'+  timeArray[i] + '</div>');
    // $(timeArrayLine).append('<textarea class="col-6 col-md-10 description border border-dark" rows=3 id=userEntry></textarea>');
    // $(timeArrayLine).append('<button id=actionButton class="btn saveBtn col-2 col-md-1 border border-dark" aria-label=save><i class="fas fa-save" aria-hidden=true></i></button>');
    console.log(timeArray[i]);
    console.log(timeArrayInts[i]);
  }
 
}
scheduleForm();

// function to color code the hours blocks on the form
function categorizeHours() {
  
}

// console.log(timeArray[0]);
//     var timeArrayButton = $('#actionButton');
//     var userScheduledEvent = ("");
//     var userText = $('#userEntry');
//     // console.log(timeArrayButton);

// // capture events in each timeblock in local storage on button click and store them in the block
// $(function scheduledEvent() {
//     timeArrayLine.addEventListener("click", function () {
//       userScheduledEvent = userText.value;
//       localStorage.setItem("9AM Event", userScheduledEvent);
//       console.log(userScheduledEvent);
//     });
//   });

//scheduledEvent();
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
