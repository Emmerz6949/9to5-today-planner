//all code inside this function will execute after the webpage has fully loaded
$(document).ready(function() {
    //uses Moment.js to get the day of the week, month, and numerical date of the day
    var today = moment().format('dddd, MMMM Do');
    //uses Moment.js to get the current hour
    var currentHour = moment().format('ha');
    //gets all elements from index.html that have the class hour
    var pageHours = $('.hour');
    //gets all textarea elements from index.html
    var hourText = $('textarea');

    //sets the text of the element (from index.html) with the id currentDay to the info stored in the today variable
    $('#currentDay').text(today);

    /*a for loop that assigns the value of each textarea in the index.html file to the 
    last corresponding value saved in local storage, and changes the background colors of 
    the textarea elements (from the index.html file) based on the time of day*/
    for (i=0; i < pageHours.length; i++) {
        $(hourText[i]).val(localStorage.getItem(i + 'events'));
        
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

    //adds a click event listener to all elements that have the class saveBtn
    /*when an element with the saveBtn class is clicked, the value of its sibling that has 
    the class description will be saved in local storage*/
    $('.saveBtn').on('click', function() {
        event.preventDefault();

        var eventText = $(this).siblings('.description').val();
        var grownUp = $(this).parent().attr('id');

        localStorage.setItem(grownUp + 'events', eventText);

        var storedText = localStorage.getItem(grownUp + 'events');
        $(this).siblings('.description').html(storedText);
    });
});
