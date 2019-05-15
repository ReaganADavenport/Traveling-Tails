"use strict"

let hotelInfo= `https://maps.googleapis.com/maps/api/place/textsearch/xml?query=hotels-in-${locationInput}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;

let parksInfo= `https://maps.googleapis.com/maps/api/place/textsearch/xml?query=parks-in-${locationInput}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;

let storeInfo= `https://maps.googleapis.com/maps/api/place/textsearch/xml?query=stores-in-${locationInput}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;

let vetInfo= `https://maps.googleapis.com/maps/api/place/textsearch/xml?query=vets-in-${locationInput}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;

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

new google.maps.places.Autocomplete(document.getElementById('#search-bar'));








// function updateWeather() {
//     get(information)
//     .then(function(response){
        
//     }); 
// }


