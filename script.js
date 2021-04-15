function timeUpdate() {

    const currentHour = parseInt(moment().format("kk"));
    const currentDayEl = document.getElementById("currentDay");

    //sets current time
    currentDayEl.innerHTML = moment().format("dddd, MMMM Do YYYY"); 

    //loops over time blocks to update css
    $('.time-block').each(function () {
        var blockHour = parseInt($(this).attr('id').split('-')[1]);
        //check if we have moved past this time 
        if (blockHour <currentHour) {
          $(this).addClass('past');
        } else if (blockHour === currentHour) {
          $(this).removeClass('past');
          $(this).addClass('present');
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
    }

timeUpdate();