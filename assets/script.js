const currentDayEl = $('#currentDay');
const buttonList = $('button');
const timeblockList = $('textarea');

// formatting the current day
const now = moment();
$('#currentDay').text(now.format("dddd, MMMM Do"));

//converting to 12h format
function twelveHourFormat(hourOfDay) {
    return parseInt(moment(hourOfDay, ["h A"]).format("HH"))
}


// textbox color changing depending on activities time. Past, present and future.

$(".time-block").each(function() {
    const format = 'H';
    const id = $(this).attr('id');
    
    const timeblockHour = parseInt(id.split('-')[1]);
    const currentHour = moment().hours();

    if(timeblockHour < currentHour) {
        $(this).addClass('past');
    } else if(timeblockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
    } else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future');
    }
});

// click event causes to store the value of texbox locally.
$(".saveBtn").on('click', function(){
    var activity = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time,activity)
})


// getting value from localStorage
$('#time-9 .description').val(localStorage.getItem('time-9'));
$('#time-10 .description').val(localStorage.getItem('time-10'));
$('#time-11 .description').val(localStorage.getItem('time-11'));
$('#time-12 .description').val(localStorage.getItem('time-12'));
$('#time-13 .description').val(localStorage.getItem('time-13'));
$('#time-14 .description').val(localStorage.getItem('time-14'));
$('#time-15 .description').val(localStorage.getItem('time-15'));
$('#time-16 .description').val(localStorage.getItem('time-16'));
$('#time-17 .description').val(localStorage.getItem('time-17'));