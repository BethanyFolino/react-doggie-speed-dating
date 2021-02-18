# Doggie Speed Dating

In this assignment, you will be building the Doggie Speed Dating app.

![app gif](http://g.recordit.co/xyhdxdMOYP.gif)

A dog picture appears, and you have 5 seconds to either adopt it or pass. The app is controlled by your keyboard: the right arrow is to adopt, the left arrow is to pass. When you have adopted a dog, then it should show up at the bottom.

## Fetching Dog Photos

Use this API to get a random dog photo: `https://dog.ceo/api/breeds/image/random`

It will return a data object like this: `{"message":"https://images.dog.ceo/breeds/labrador/n02099712_1987.jpg","status":"success"}`

You can then use the URL from the `message` property to load an image.

## Using Keyboard Events

You can use `window.addEventListener("keydown", yourCallbackFunctionHere)` to listen for keyboard events. However, this should happen inside of a useEffect hook!

Also, remember to clean-up your event listener with `window.removeEventListener("keydown", yourCallbackFunctionHere)`. Your useEffect hook should return a function which removes the event listener so that your listener is properly removed from the DOM when the component is removed.

## Countdown Timer

Ideally, your countdown timer should update the time remaining every second. To do this, you can use [setInterval()](https://www.w3schools.com/jsref/met_win_setinterval.asp). This function calls a function at specified intervals. It accepts 2 arguments: the first argument is a callback function and the second is a number of milliseconds representing the interval. So, if you pass it a callback function and 1000 (1 second), then it will call that function once every second.

> Remember to use [clearInterval()](https://www.w3schools.com/jsref/met_win_clearinterval.asp) to remove your timer! Your useEffect hook should clear the timer when it is done.

## Application Flow

Your app should have at least the following pieces of state:

- The current dog image URL
- the array of dog image URLs that have been adopted
- The timeRemaining variable

Your app should flow as follows:

1.  When the page loads, go fetch the first dog image
2.  Create an event listener to listen for the right and left arrow
3.  Once you get the first dog image, then render it and start the timer.
4.  The timer should count down to zero
5.  if the timer reaches zero or the user presses left, then skip the dog.
6.  If the user presses right, then add the dog image url to the array
7.  Fetch a new dog image and start the timer over.

## Requirements

- A dog image is loaded from the dog API
- Pressing right adds the dog to the list
- Pressing left skips the current dog
- A timer counts down from 5 to 0, skipping the dog if it reaches zero
- The adopted dogs are displayed at the bottom

# Credits and References

Author: Bethany Folino

References: help from Danielle Bobb
