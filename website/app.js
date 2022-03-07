/* Global Variables */
// Personal API Key for OpenWeatherMap API
const apiKey = '275b00acc73d47bac958655390faa175';
const basicUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const unitUrl = ',us&units=imperial&appid=';

// DOM elements
const button = document.getElementById('generate');
const feelings = document.getElementById('feelings');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');
const zip = document.querySelector("#zip");

// Create a new date instance dynamically with JS...(I find monthes in letters better )
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let d = new Date();
let newDate = d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear();

// async/await GET function to fetch the temperature dergree
const getTempData = async (url = '') => {
    const response = await fetch(url);
    try {
        const newTempData = await response.json();
        return newTempData
    } catch (err) {
        console.log(err)
        alert(err)
    }
};

// async/await POST function to send data to the server
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header
        body: JSON.stringify(data),
    });
    try {
        const newDataP = await response.json();
        console.log(newDataP) //For testing purpose
        return newDataP
    } catch (err) {
        console.log(err);
        alert(err)
    };
};

// async/await GET function to bring the data and append it to DOM elements
const getData = async (url = '') => {
    const response = await fetch(url);
    try {
        const newDataG = await response.json();
        date.innerHTML = `Date: ${newDataG.date}`;
        temp.innerHTML = `Temperature is ${Math.round(newDataG.temp)} Degrees`;
        content.innerHTML = `I am feeling ${newDataG.content}`;
        return newDataG
    } catch (err) {
        console.log(err)
        alert(err)
    }
};

// Button click to trigger the the chain of fetch data functions
button.addEventListener('click', () => {
    const zipCode = zip.value;
    if (zipCode == 0 || zipCode.length < 5) {
        alert('Enter valid zip.')   //Condition to handle wrong zip code
    } else if (feelings.value == 0) {
        alert('Tell us how are you feeling today') //Condition to handle empty feeling text
    };

    getTempData(`${basicUrl}${zipCode}${unitUrl}${apiKey}`)
        .then((data) => {
            postData('/postData', { date: newDate, temp: data.main.temp, content: feelings.value })
        }).then(() => {
            getData('/getData')
        });
});