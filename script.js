function timeUpdate() {
    const currentHour = parseInt(moment().format("kk"));
    const currentDayEl = document.getElementById("currentDay");
    currentDayEl.innerHTML = moment().format("dddd, MMMM Do YYYY"); 
}

timeUpdate();