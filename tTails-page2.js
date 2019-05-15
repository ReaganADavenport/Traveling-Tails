"use strict"
let hotelInfo=`https://maps.googleapis.com/maps/api/place/textsearch/xml?query=hotels-in-${locationInput}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;
let parksInfo=`https://maps.googleapis.com/maps/api/place/textsearch/xml?query=parks-in-${locationInput}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;
let storeInfo=`https://maps.googleapis.com/maps/api/place/textsearch/xml?query=stores-in-${locationInput}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;
let vetInfo=`https://maps.googleapis.com/maps/api/place/textsearch/xml?query=vets-in-${locationInput}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;

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

function markVets(object){
    object.forEach(vet => {
        const lat = object.result.geometry.location.lat;
        const lng = object.result.geometry.location.lng;

        const marker = new google.maps.Marker({
            position:{lat, lng},
            map: map
        });
    });
}

function updateMap() {
    get(hotelInfo)
    .then(function(response){
        markHotels(response);
    }); 

    get(parksInfo)
    .then(function(response){
        markParks(response);
    })

    get(storeInfo)
    .then(function(response){
        markPetStores(response);
    })

    get(vetInfo)
    .then(function(response){
        markVets(response);
    })
}