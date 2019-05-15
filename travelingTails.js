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

function updateMap() {
    get(information)
    .then(function(response){
        addMap(response);   
    }); 
}

function addMap(object) {
    // get lat and long coordinates
    const zip = object;
    // Use the Lat/Long to create a map
    const mapUrl = `http://maps.google.com/maps?q=${zip}&output=embed`;
    // create iframe and set attributes
    const iframe = document.createElement('iframe');
    iframe.src = mapUrl;
    document.querySelector(".images").append(iframe);
}


updateMap;