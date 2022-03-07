# Weather-Journal App Project

## Description

It is Weather Journal App with Asynchronous JavaScript as a test for Professional Front-End Web Development Nanodegree Program.

## Structure

server.js
website
app.js
index.html
style.css
README.md

## Technologies

HTML, CSS, Javascript

## Dependencies

-Node Modules
-Express
-Body Parser
-Cors

## Main Scenario

Client side:
Send GET request to OpenWeatherMap API to fetch data using personal API Key for OpenWeatherMap API.

Chaining with the previous GET request send POST request to server.js to send data to server.js which is tempareture from OpenWeatherMap, date, and the user feeling.

Also chaining with that POST request send GET request to fetch data that has been saved to object in server.js.

Then insert data into HTML elements through DOM manipulation.

Server side:
After install required dependencies Express, Body Parser, Cors.
Run Express to run server and routes.
Run body-parser as middle-ware.
Run Cors for cross origin allowance.
Initialize the main project folder.
Setting port and listening function.
Create GET function with a route and callback function.
Create POST function with a route and callback function.
