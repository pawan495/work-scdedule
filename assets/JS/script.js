const nineAM = $("#col-md-9");
const tenAM = $("#col-md-10");
const elevenAM = $("#col-md-11");
const twelvePM = $("#col-md-12");
const onePM = $("#col-md-1");
const twoPM = $("#col-md-2");
const threePM = $("#col-md-3");
const fourPM = $("#col-md-4");
const fivePM = $("#col-md-5");
// Work Hours
const hour9 = 9;
const hour10 = 10;
const hour11 = 11;
const hour12 = 12;
const hour1 = 13;
const hour2 = 14;
const hour3 = 15;
const hour4 = 16;
const hour5 = 17;
//button function to clear local storage and clear contents
$("#clearFiledBtn").click(function(event){
event.preventDefault;
$("textarea").val("");
localStorage.clear();
});

// Current date and time
const currentDay = moment().format("llll");

// Current hour
const currentHour = moment().hour();

// Save button
const saveBtn = $(".saveBtn");

// Display current date and time
$("#currentDay").html(currentDay);

//* Getting data from Local Storage

// 9am
nineAM.val(localStorage.getItem("9"));
// 10am
tenAM.val(localStorage.getItem("10"));
// 11am
elevenAM.val(localStorage.getItem("11"));
// 12am
twelvePM.val(localStorage.getItem("12"));
// 1pm
onePM.val(localStorage.getItem("13"));
// 2pm
twoPM.val(localStorage.getItem("14"));
// 3pm
threePM.val(localStorage.getItem("15"));
// 4pm
fourPM.val(localStorage.getItem("16"));
// 5pm
fivePM.val(localStorage.getItem("17"));


// If the currentHour is greater than, less than or equal to the specified hour in each timeblock then a different class will be added
//9am
if (currentHour < hour9) {
  nineAM.addClass("future");
} else if (currentHour > hour9) {
  nineAM.addClass("past");
} else if (currentHour == hour9) {
  nineAM.addClass("present");
}

//10am
if (currentHour < hour10) {
  tenAM.addClass("future");
} else if (currentHour > hour10) {
  tenAM.addClass("past");
} else if (currentHour == hour10) {
  tenAM.addClass("present");
}

//11am
if (currentHour < hour11) {
  elevenAM.addClass("future");
} else if (currentHour > hour11) {
  elevenAM.addClass("past");
} else if (currentHour == hour11) {
  elevenAM.addClass("present");
}
//12pm
if (currentHour < hour12) {
  twelvePM.addClass("future");
} else if (currentHour > hour12) {
  twelvePM.addClass("past");
} else if (currentHour == hour12) {
  twelvePM.addClass("present");
}
//1pm
if (currentHour < hour1) {
  onePM.addClass("future");
} else if (currentHour > hour1) {
  onePM.addClass("past");
} else if (currentHour == hour1) {
  onePM.addClass("present");
}
//2pm
if (currentHour < hour2) {
  twoPM.addClass("future");
} else if (currentHour > hour2) {
  twoPM.addClass("past");
} else if (currentHour == hour2) {
  twoPM.addClass("present");
}
//3pm
if (currentHour < hour3) {
  threePM.addClass("future");
} else if (currentHour > hour3) {
  threePM.addClass("past");
} else if (currentHour == hour3) {
  threePM.addClass("present");
}
//4pm
if (currentHour < hour4) {
  fourPM.addClass("future");
} else if (currentHour > hour4) {
  fourPM.addClass("past");
} else if (currentHour == hour4) {
  fourPM.addClass("present");
}
//5pm
if (currentHour < hour5) {
  fivePM.addClass("future");
} else if (currentHour > hour5) {
  fivePM.addClass("past");
} else if (currentHour == hour5) {
  fivePM.addClass("present");
}

//*Event Listeners

// Save to Local Storage
// When the this keyword is called using event listeners, it will point toward the DOM element that the event listener is attached to, thus the saveBtn in this case
saveBtn.click(function () {
  const value = $(this).siblings(".description").val();
  const time = $(this).parent().attr("id");

  localStorage.setItem(time, value);
});
