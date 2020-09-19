# JavaScript and DOM Manipulation : UFO Sight Data

![ufo](https://github.com/UoT-Bootcamp/Javascript-challenge/blob/master/ufo_image.jpeg) <br/>

## Background :

The extra-terrestrial menace has come to Earth and we here at 'ALIENS-R-REAL' have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.

There is just one tiny problem though... our collection is too large to search through manually. Even our most dedicated followers are complaining that they are having trouble locating specific reports in this mess.

That's why we wrote code that will create a table dynamically based upon a dataset we provide. We also allowed our users to filter the table data for specific values. There's a catch though... we only use pure JavaScript, HTML, and CSS, and D3.js on our web pages. 

The planet Earth needs to know what we have found!


### Level 1: Automatic Table and Date Search

* For this, we created a basic HTML web page.

* Using the UFO dataset provided in the form of an array of JavaScript objects, we appended a table to the web page and then added new rows of data for each UFO sighting.

* We have a column for date/time, city, state, country, shape, and comment.

* We used a date form in the HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

![ufo](https://github.com/UoT-Bootcamp/Javascript-challenge/blob/master/UFO-level-1/UFO1_website_image.png)<br/>


### Level 2: Multiple Search Categories

* For this, we completed all of Level 1 criteria.

* Using multiple input tags and/or select dropdowns, we wrote JavaScript code so the user can set multiple filters and search for UFO sightings using the following criteria based on the table columns:
  * date/time
  * city
  * state
  * country
  * shape
  
  ![ufo](https://github.com/UoT-Bootcamp/Javascript-challenge/blob/master/UFO-level-2/ufo2_website_image.png)
