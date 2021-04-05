var currentDayEl = $("#current-day")
var currentDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var currentTimeEl = $("#current-time")




console.log(currentDay[moment().isoWeekday()])

var calendarContainer = $("#calendar-container")

var calendarTimes = []

for(i = 0; i<24; i++){
    calendarTimes[i] = moment().hour(i).format("ha")
}

console.log(calendarTimes)

var x = 1

for(i = 0; i < 9; i++){
    calendarContainer.append("<div class=\"row\"></div>")
    calendarContainer.children().last().addClass("table-row-" + x);
    calendarContainer.children().last().append("<div class=\"col\">");
    calendarContainer.children().last().children().last().text(calendarTimes[i + 9])
    calendarContainer.children().last().children().last().addClass("table-column-1 calendar-time-" + x)
    calendarContainer.children().last().append("<div class=\"col-9\">");
    calendarContainer.children().last().children().last().addClass("table-column-2")
    calendarContainer.children().last().children().last().append("<input></input>")
    calendarContainer.children().last().children().last().children().addClass("item-input item-input-" + x)
    calendarContainer.children().last().append("<div class=\"col\">");
    calendarContainer.children().last().children().last().addClass("table-column-3")
    calendarContainer.children().last().children().last().append("<button>Save</button>")
    calendarContainer.children().last().children().last().children().addClass("save-button save-button-" + x)
    x ++
}

var calendarTimeEl = []
var itemInputEl = []

for(i=0; i < 9; i++){
    calendarTimeEl[i] = $("calendar-time-" + (i+1))
    itemInputEl[i] = $("item-input-" + (i+1))
}

console.log(itemInputEl)
console.log(calendarTimeEl)

var currentTime = function() {
    currentDayEl.text("Today is: " + currentDay[moment().isoWeekday()])
    currentTimeEl.text("It is currently " + moment().format("h:mmA"))
    for(i = 0; i < 9; i++){
        if(moment(calendarTimes[i + 9]).isBefore()){
            itemInputEl[i].css("background-color", "gray")
        }
    }
}

currentTime()

setInterval(currentTime, 100)