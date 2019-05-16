"use strict"

const firstButton =document.querySelector('#first-page-button');
const locationInput =document.querySelector('#search-bar');
const secondPage = document.querySelector('#second-page');
const firstPage = document.querySelector('#inner-body-wrapper');

// let locationInput = locationInput1.innerHTML;
const locationValue = locationInput.value;
// console.log("location", locationValue);

const hotelInfo= `https://my-little-cors-proxy.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/xml?query=hotels-in-${locationValue}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;

const parksInfo= `https://my-little-cors-proxy.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/xml?query=parks-in-${locationValue}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;

const storeInfo= `https://my-little-cors-proxy.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/xml?query=stores-in-${locationValue}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;

const vetInfo= `https://my-little-cors-proxy.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/xml?query=vets-in-${locationValue}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;

//pg2
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
        const lat = hotel.result.geometry.location.lat;
        const lng = hotel.result.geometry.location.lng;

        new google.maps.Marker({
            position:{lat, lng},
            map: map
        });
    });
}


function markParks(object){
    object.forEach(park => {
        const lat = park.result.geometry.location.lat;
        const lng = park.result.geometry.location.lng;

        new google.maps.Marker({
            position:{lat, lng},
            map: map
        });
    });
}

function markPetStores(object){
    object.forEach(store => {
        const lat = store.result.geometry.location.lat;
        const lng = store.result.geometry.location.lng;

        new google.maps.Marker({
            position:{lat, lng},
            map: map
        });
    });
}

function markVets(object){
    object.forEach(vet => {
        const lat = vet.result.geometry.location.lat;
        const lng = vet.result.geometry.location.lng;

        new google.maps.Marker({
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


firstButton.addEventListener('click', function(e){
    e.preventDefault;
    // toggle(secondPage);
    // console.log(hotel.result.geometry.location.lat);
    if (secondPage.style.display === 'none') {
        secondPage.style.display = 'block';
        firstPage.style.display = 'none';
    } else {
        secondPage.style.display = 'none';
        firstPage.style.display = 'block';
    }
    updateMap();    
});



















