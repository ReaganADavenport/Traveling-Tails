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

function markHotels(object){
    object.forEach(hotel => {
        const lat = object.result.geometry.location.lat;
        const lng = object.result.geometry.location.lng;

        const marker = new google.maps.Marker({
            position:{lat, lng},
            map: map
        });
    });
}


function markParks(object){
    object.forEach(park => {
        const lat = object.result.geometry.location.lat;
        const lng = object.result.geometry.location.lng;

        const marker = new google.maps.Marker({
            position:{lat, lng},
            map: map
        });
    });
}

function markPetStores(object){
    object.forEach(store => {
        const lat = object.result.geometry.location.lat;
        const lng = object.result.geometry.location.lng;

        const marker = new google.maps.Marker({
            position:{lat, lng},
            map: map
        });
    });
}

function updateMap() {
    get(information)
    .then(function(response){
             
    }); 
}