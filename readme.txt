Udacity Project 4: Web optimizations for 1. Page Speed and 2. Achieving 60 fps

Page Speed Optimizations

To achieve the goal of at least 90 for both mobile and desktop, I made the following optimizations:

1. Used Grunt to minify the css
2. Used Google tools to compress images (Tools are on Page Speed Insights page)
3. Created a separate critical CSS file and inlined it 
4. Optimized Google fonts by adding the WebFont Config Script
5. Added media="print" to the css/print.css file so it only would load if printing
6. Added async to two .js files so they would load asynchronously

Achieving 60 fps in the pizza.html page 

1. Changed .querySelectorAll to .getElementsByClassName for the "mover" class so not  all elements would be selected each time
2.  Moved var dx and var newWidth out of the for loop to stop browser thrashing on the function changePizzaSizes
3. On same function, cached document.querySelectorAll(".randomPizzaContainer").length in a new variable called var saveTime and then used that variable in the for loop.
4. In function updatePositions, created new variable called var left to be the positions and movment of pizzas on the page
5. Concatenated this variable with "translateX" in order to make pizza movement (all on X axis) more performant, and added "translateZ(0)" to trigger Graphic Processing Unit acceleration, i.e make the animation smoother. 