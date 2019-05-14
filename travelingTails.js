"use strict"
const information = 

function get(url) {
    return fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            return data;
        })
        .catch(function(error) {
            return error;
        });
}

function updateWeather() {
    get(information)
    .then(function(response){
        
    }); 
}


