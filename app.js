const API_URL_ALL_CARS = 'http://127.0.0.1:8080/cars';

let cars;

fetch(API_URL_ALL_CARS, {
    mode: 'no-cors',
    method: 'GET',
    url: `http://localhost:8080`,
    credentials: 'include'
})
    .then((response) => {
        console.log(response)
    });