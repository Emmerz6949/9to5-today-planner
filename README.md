# 9 to 5 Today Planner

## Description

This repository was created to add more html elements to the pre-existing files as well as a script.js file that utilizes jQuery and Moment.js to create a day planner for the current day between the standard workday hours of 9AM and 5PM.

![image](https://i.ibb.co/gzX0CJB/Work-Day-Scheduler.png)

You can use the commits to follow my journey.



### How did I do it?

I created the timeblocks using html elements and the classes provided by the pre-existing style.css file. Each timeblock represents an hour (ex: 9AM represents the entire hour from 9:00:00AM to 9:59:59AM). I created a script.js file and utilized jQuery and Moment.js to write the code inside it. That code displays the current day on the website, changes the colors of the timeblocks' textareas based on the time of day (grey = past, red = present, and green = future (ex: if the current hour is 2PM, then the textareas from the 9AM timeblock to the 1PM timeblock will be grey, the textarea of the 2PM timeblock will be red, and the textareas from the 3PM timeblock to the 5PM timeblock will be green)), and stores/retrieves the user input into/from the local storage whhen a timeblock's save button is clicked.

If you wish to visit the website you can do so via the following link: https://emmerz6949.github.io/9to5-today-planner/ .



### Installation and Usage

There isn't anything to install as this is just a website that has been deployed.

To use the planner click on the link in the "How did I do it?" section of this README.md, then click inside the textarea of your desired timeblock and type in the event you're planning for today (make sure to click the blue save button). If you clicked the blue save button, then when you referesh the page your events should still be there for you.



### Credits

The css and some of the html were provided by Trilogy Education Services (https://www.trilogyed.com/).
