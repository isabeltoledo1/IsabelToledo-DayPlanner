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
}

timeUpdate();



//onclick event to saveBtn
$(".saveBtn").on("click", function () {
  var description = $(this).siblings(".description").val();
  console.log(description);
  var time = $(this).parent().attr("id");

  //setItem is the method used to save to local storage
  localStorage.setItem(time, description);

  
});

//reload saved description into time blocks
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));


//function for deleteBtn to delete all local storage data 
$(".deleteBtn1").on("click", function () {
    localStorage.removeItem('hour-9');
    window.location.reload();
  });
 
  $(".deleteBtn2").on("click", function () {
    localStorage.removeItem('hour-10');
    window.location.reload();
  });

  $(".deleteBtn3").on("click", function () {
    localStorage.removeItem('hour-11');
    window.location.reload();
  });

  $(".deleteBtn4").on("click", function () {
    localStorage.removeItem('hour-12');
    window.location.reload();
  });

  $(".deleteBtn5").on("click", function () {
    localStorage.removeItem('hour-13');
    window.location.reload();
  });

  $(".deleteBtn6").on("click", function () {
    localStorage.removeItem('hour-14');
    window.location.reload();
  });

  $(".deleteBtn7").on("click", function () {
    localStorage.removeItem('hour-15');
    window.location.reload();
  });

  $(".deleteBtn8").on("click", function () {
    localStorage.removeItem('hour-16');
    window.location.reload();
  });
 
  $(".deleteBtn9").on("click", function () {
    localStorage.removeItem('hour-17');
    window.location.reload();
  });

  $(".deleteBtn10").on("click", function () {
    localStorage.removeItem('hour-18');
    window.location.reload();
  });

  