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

function updateMap() {
    get(information)
    .then(function(response){
             
    }); 
}


// function TESTmarkHotels(object1, object2){
//     object.forEach(hotel => {
//         const lat = object1;
//         const lng = object2;

//         const marker = new google.maps.Marker({
//             position:{lat, lng},
//             map: map
//         });
//     });
// }

// TESTmarkHotels(33.8487, -84.3733);