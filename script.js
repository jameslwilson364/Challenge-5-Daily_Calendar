// get a handle on objects
var scheduleContainer = $('#scheduleContainer');
var currentDayGrab = $('#currentDay');
var timeArray = $(["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]);
var timeArrayInts = $([9,10,11,12,13,14,15,16,17]);
var currentTime = dayjs().hour();
var currentDay = dayjs().format('dddd MMMM DD, YYYY');
var currentTimeInt = parseInt(currentTime);
console.log(currentDay);
console.log(currentTime);
console.log(timeArray.length);
console.log(timeArrayInts.length);

// loop function to create blocks for hours 9-5 within the timeLineArrayChild div tag
function scheduleForm() { 
  $(currentDayGrab).text(currentDay);
  $(scheduleContainer).append('<div id=timeArrayLine ></div>');
  for (i=0; i < timeArrayInts.length; i++) {
      var timeArrayLine = $('#timeArrayLine');
      var timeArrayLineChild = $('<div id=timeArrayLineChild class="row text-block past">');
      console.log(currentTime);
      timeArrayLine.append(timeArrayLineChild);
      $(timeArrayLineChild).append('<div class="col-2 col-md-1 hour text-center py-4 border border-dark" id=timeBlock>'+  timeArray[i] + '</div>');
      $(timeArrayLineChild).append('<textarea class="col-6 col-md-10 description border border-dark" rows=3 id=userEntry></textarea>');
      $(timeArrayLineChild).append('<button id=actionButton class="btn saveBtn col-2 col-md-1 border border-dark" aria-label=save><i class="fas fa-save" aria-hidden=true></i></button>');
      var timeCheck = parseInt(timeArrayInts[i]);
      //nested for loop to set dynamic time color values for hour blocks; future=green, present=red, past=grey
        for (j=0; j < timeArrayLineChild.length; j++) {
          console.log(timeArrayLineChild[j]);
          console.log(timeCheck);
          if (timeCheck > currentTimeInt) {
            $(timeArrayLineChild[j]).attr('style', 'background-color:#77dd77');
          } else if (timeCheck === currentTimeInt) {
            $(timeArrayLineChild[j]).attr('style', 'background-color:#ff6961');
          } else {
            $(timeArrayLineChild[j]).attr('style', 'background-color: #d3d3d3');
          }
        }
    console.log(timeArray[i]);
    console.log(timeArrayInts[i]);
    
  }
}
scheduleForm();

// capture events in each timeblock in local storage on button click and store them in the block
// add a unique event listener for each block

  // 9AM event storage and retrieval
  function user9AMSchedule() {
  var timeButton9AM = (timeArrayLine.children[0].children[2]);
  // var timeButton9AM = $('#actionbutton');
  var userInput9AM = (timeArrayLine.children[0].children[1]);
  var userEvent9AM = ("");
  timeButton9AM.addEventListener("click", function(event) {
      event.preventDefault();  
      userEvent9AM = userInput9AM.value;
      localStorage.setItem("9AM Event", userEvent9AM);
      console.log(userEvent9AM);
      });

  function print9amEvent(){
    var userEvent9AMPerm = localStorage.getItem("9AM Event");
    timeArrayLine.children[0].children[1].textContent = userEvent9AMPerm;
  }
  print9amEvent();
  }
  user9AMSchedule();

   // 10AM event storage and retrieval
   function user10AMSchedule() {
    var timeButton10AM = (timeArrayLine.children[1].children[2]);
    var userInput10AM = (timeArrayLine.children[1].children[1]);
    var userEvent10AM = ("");
    timeButton10AM.addEventListener("click", function(event) {
        event.preventDefault();  
        userEvent10AM = userInput10AM.value;
        localStorage.setItem("10AM Event", userEvent10AM);
        console.log(userEvent10AM);
        });
  
    function print10amEvent(){
      var userEvent10AMPerm = localStorage.getItem("10AM Event");
      timeArrayLine.children[1].children[1].textContent = userEvent10AMPerm;
    }
    print10amEvent();
    }
    user10AMSchedule();

    // 11AM event storage and retrieval
   function user11AMSchedule() {
    var timeButton11AM = (timeArrayLine.children[2].children[2]);
    var userInput11AM = (timeArrayLine.children[2].children[1]);
    var userEvent11AM = ("");
    timeButton11AM.addEventListener("click", function(event) {
        event.preventDefault();  
        userEvent11AM = userInput11AM.value;
        localStorage.setItem("11AM Event", userEvent11AM);
        console.log(userEvent11AM);
        });
  
    function print11amEvent(){
      var userEvent11AMPerm = localStorage.getItem("11AM Event");
      timeArrayLine.children[2].children[1].textContent = userEvent11AMPerm;
    }
    print11amEvent();
    }
    user11AMSchedule();

    // 12PM event storage and retrieval
   function user12PMSchedule() {
    var timeButton12PM = (timeArrayLine.children[3].children[2]);
    var userInput12PM = (timeArrayLine.children[3].children[1]);
    var userEvent12PM = ("");
    timeButton12PM.addEventListener("click", function(event) {
        event.preventDefault();  
        userEvent12PM = userInput12PM.value;
        localStorage.setItem("12PM Event", userEvent12PM);
        console.log(userEvent12PM);
        });
  
    function print12pmEvent(){
      var userEvent12PMPerm = localStorage.getItem("12PM Event");
      timeArrayLine.children[3].children[1].textContent = userEvent12PMPerm;
    }
    print12pmEvent();
    }
    user12PMSchedule();

    // 1PM event storage and retrieval
   function user1PMSchedule() {
    var timeButton1PM = (timeArrayLine.children[4].children[2]);
    var userInput1PM = (timeArrayLine.children[4].children[1]);
    var userEvent1PM = ("");
    timeButton1PM.addEventListener("click", function(event) {
        event.preventDefault();  
        userEvent1PM = userInput1PM.value;
        localStorage.setItem("1PM Event", userEvent1PM);
        console.log(userEvent1PM);
        });
  
    function print1pmEvent(){
      var userEvent1PMPerm = localStorage.getItem("1PM Event");
      timeArrayLine.children[4].children[1].textContent = userEvent1PMPerm;
    }
    print1pmEvent();
    }
    user1PMSchedule();
  
    // 2PM event storage and retrieval
   function user2PMSchedule() {
    var timeButton2PM = (timeArrayLine.children[5].children[2]);
    var userInput2PM = (timeArrayLine.children[5].children[1]);
    var userEvent2PM = ("");
    timeButton2PM.addEventListener("click", function(event) {
        event.preventDefault();  
        userEvent2PM = userInput2PM.value;
        localStorage.setItem("2PM Event", userEvent2PM);
        console.log(userEvent2PM);
        });
  
    function print2pmEvent(){
      var userEvent2PMPerm = localStorage.getItem("2PM Event");
      timeArrayLine.children[5].children[1].textContent = userEvent2PMPerm;
    }
    print2pmEvent();
    }
    user2PMSchedule();

    // 3PM event storage and retrieval
   function user3PMSchedule() {
    var timeButton3PM = (timeArrayLine.children[6].children[2]);
    var userInput3PM = (timeArrayLine.children[6].children[1]);
    var userEvent3PM = ("");
    timeButton3PM.addEventListener("click", function(event) {
        event.preventDefault();  
        userEvent3PM = userInput3PM.value;
        localStorage.setItem("3PM Event", userEvent3PM);
        console.log(userEvent3PM);
        });
  
    function print3pmEvent(){
      var userEvent3PMPerm = localStorage.getItem("3PM Event");
      timeArrayLine.children[6].children[1].textContent = userEvent3PMPerm;
    }
    print3pmEvent();
    }
    user3PMSchedule();

    // 4PM event storage and retrieval
   function user4PMSchedule() {
    var timeButton4PM = (timeArrayLine.children[7].children[2]);
    var userInput4PM = (timeArrayLine.children[7].children[1]);
    var userEvent4PM = ("");
    timeButton4PM.addEventListener("click", function(event) {
        event.preventDefault();  
        userEvent4PM = userInput4PM.value;
        localStorage.setItem("4PM Event", userEvent4PM);
        console.log(userEvent4PM);
        });
  
    function print4pmEvent(){
      var userEvent4PMPerm = localStorage.getItem("1PM Event");
      timeArrayLine.children[7].children[1].textContent = userEvent4PMPerm;
    }
    print4pmEvent();
    }
    user4PMSchedule();
    
    // 5PM event storage and retrieval
   function user5PMSchedule() {
    var timeButton5PM = (timeArrayLine.children[8].children[2]);
    var userInput5PM = (timeArrayLine.children[8].children[1]);
    var userEvent5PM = ("");
    timeButton5PM.addEventListener("click", function(event) {
        event.preventDefault();  
        userEvent5PM = userInput5PM.value;
        localStorage.setItem("5PM Event", userEvent5PM);
        console.log(userEvent5PM);
        });
  
    function print5pmEvent(){
      var userEvent5PMPerm = localStorage.getItem("5PM Event");
      timeArrayLine.children[8].children[1].textContent = userEvent5PMPerm;
    }
    print5pmEvent();
    }
    user5PMSchedule();




