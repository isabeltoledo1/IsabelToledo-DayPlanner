function timeUpdate() {
  const currentHour = parseInt(moment().format("kk"));
  const currentDayEl = document.getElementById("currentDay");

  //sets current time
  currentDayEl.innerHTML = moment().format("dddd, MMMM Do YYYY");

  //loops over time blocks to update css
  $(".time-block").each(function () {
    var hour = parseInt($(this).attr("id").split("-")[1]);
    //check if we have moved past this time
    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });

  //onclick event to saveBtn
  $(".saveBtn").on("click", function () {
    var description = $(this).siblings(".description").val();
    console.log(description);
    var time = $(this).parent().attr("id");
  
 
    //adds to local storage
      localStorage.setItem(time, appt);
   
  });




}

timeUpdate();
