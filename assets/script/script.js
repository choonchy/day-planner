var currentDayEl = $("#current-day")
var currentDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var currentTimeEl = $("#current-time")
var currentTime = function() {
    currentDayEl.text("Today is: " + currentDay[moment().isoWeekday()])
    currentTimeEl.text("It is currently " + moment().format("h:mmA"))
}

currentTime()

setInterval(currentTime, 100)

console.log(currentDay[moment().isoWeekday()])

var calendarContainer = $("#calendar-container")

