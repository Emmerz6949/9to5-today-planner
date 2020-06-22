$(document).ready(function() {
    var today = moment().format('dddd, MMMM Do');
    var currentHour = moment().format('ha');
    var pageHours = $('.hour');
    var hourText = $('.description');

    for (i=0; i < pageHours.length; i++) {
        if (currentHour.toUpperCase() === $(pageHours[i]).text()) {
            $(hourText[i]).addClass('present');
            var index = i;
        }
        else if (index < hourText.length) {
            for (a = index; a < hourText.length; a++) {
                $(hourText[i]).addClass('future');
            }
        }
        else if (currentHour === '12am' || currentHour === '1am' || currentHour === '2am' || currentHour === '3am' || currentHour === '4am' || currentHour === '5am' || currentHour === '6am' || currentHour === '7am' || currentHour === '8am') {
            $(hourText[i]).addClass('future');
        }
        else {
            $(hourText[i]).addClass('past');
        }
    }

    $('#currentDay').text(today);
});