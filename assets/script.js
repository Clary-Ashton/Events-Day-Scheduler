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
// for const id is the id number of the parent div.
$("textarea").each(function() {
    const format = 'H';
    const id = $(this).parent().attr('id');
    
    const timeblockHour = moment(id.replace(/\D/g, ''), format);
    const currentHour = moment(now.format('H'), format);

    if(currentHour.isBefore(timeblockHour)) {
        $(this).addClass('future');
    } else if(currentHour.isAfter(timeblockHour)) {
        $(this).addClass('past');
    } else {
        $(this).addClass('present');
    }
});

// click event causes to store the value of texbox locally.

buttonList.on('click', function() {
    const textBox = $(this).prev();    
    
    const id = $(this).parent().attr('id');
    localStorage.setItem(id, textBox.val());
});

// getting value from localStorage