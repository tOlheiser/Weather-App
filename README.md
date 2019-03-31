# Weather-App
This page uses the open weather map API to search for a city and display its weather. It uses ES6 JavaScript and fetch API for handling requests.

## Notable things I did & learned: 
..* Used the Fetch API to make the AJAX request.
..* Evaluated which search method was used.
..* Displayed images and icons based on the weather of that city. 
..* Receiving the data in JSON format, then grabbing the data I needed. 
..* Set the position of the weather card using JavaScript

## Reflections on the experience
The tutorial was very well done using modern methods of coding and was very technical. I had to stop numerous times in the video, rewind, and watch certain sections again to understand what was going on. His process made me feel that I too could create a project like this. He console.logged the JSON that was returned. Then he broke down the data we needed from it and how we'd pull it from the JSON data. 

## Things I need to look into after this tutorial:
1. Something that I don't understand is the 'getSearchMethod()' function in the code. It doesn't have a return statement, and also doesn't make any changes to the page. It would seem that the return statement would have been implied, which I didn't know existed. Will seek out clarification on this. 

2. The Fetch API was useful, but the instructor ran through it fairly quickly. This is definitely something I'll delve deeper into. For example, he used arrow functions which I'm really rusty on. They are puzzling to read if you don't work with them often enough. He used a '.then()' statement which seemed VERY useful, something I need to take time to understand more. Essentially, the code will cease executing until data has been received from the request. 

Thing that confused me was that he chained a couple of these '.then()' statements together, so I didn't quite understand how things were being executed. 

3. He set the position of his element using javascript. It was very precise, I had never seen this before. I'll definitely be looking further into it. 

4. His click event used an anonymous function. I'm curious why he chose to use an anonymous function over one that was declared. My assumption is that it was to keep the code more concise (since that function would only have been used once). 
