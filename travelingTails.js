"use strict"

const firstButton =document.querySelector('#first-page-button');
const secondPage = document.querySelector('#second-page');
const firstPage = document.querySelector('#inner-body-wrapper');
// const locationInput = document.querySelector('#search-bar');
// const locationValue = locationInput.value;
// let locationValue;

firstButton.addEventListener('click', function(e){
    e.preventDefault;
    setLocations();
    // toggle(secondPage);
    if (secondPage.style.display === 'none') {
        secondPage.style.display = 'block';
        firstPage.style.display = 'none';
    } else {
        secondPage.style.display = 'none';
        firstPage.style.display = 'block';
    }    
});

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
};

function setLocations() {
    // Grabbing the user input
    const locationInput = document.querySelector('#search-bar').value;

    // Grabbing the API library for hotels and inputing the user input 
    let hotelInfo = `https://my-little-cors-proxy.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels-in-${locationInput}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;

    get(hotelInfo)
    .then(function(response) {
        const results = response.results;
        let latArray = [];
        let longArray = [];
        let nameArray = [];
        let rateArray = [];
        results.forEach((result) => {
            // console.log("result is", result);
            const lat = Number(result.geometry.location.lat);
            const long = Number(result.geometry.location.lng);
            const name = String(result.name);
            const rate = String(result.rating);
            latArray.push(lat);
            longArray.push(long);
            nameArray.push(name);
            rateArray.push(rate);
        });
    return [latArray, longArray, nameArray, rateArray];
    })

    .then(function(coordArray) {
        const latArray = coordArray[0];
        const longArray = coordArray[1];
        const nomArray = coordArray[2];
        const rateArray = coordArray[3];
        console.log(coordArray);
        markPlaces(nomArray,rateArray,latArray,longArray,latArray,longArray);
        });

};

//Making the map, setting it to the first coordinates in the location inputed Array
function markPlaces(name, rating, latitude, longitude, inDesLat, inDesLong) {
    const options = {
        zoom: 10,
        //took out [0]s 
        center: {lat:inDesLat[0],lng:inDesLong[0]},
        }
    const map = new google.maps.Map(document.getElementById('map'), options);
    for (let i = 0; i <= latitude.length; i++) {
        let marker = new google.maps.Marker({
            position:{lat: latitude[i], lng: longitude[i]},
            map: map
        });

        let infoWindow = new google.maps.InfoWindow({
            content: `<h2>${name[i]}, ${rating[i]}</h2>`
        });

        marker.addListener('click', function(){
            infoWindow.open(map, marker);
        })
    }
}



// function markHotels(object){
//     object.forEach(function(hotel) {
//         const lat = hotel.PlaceSearchResponse.geometry.location.lat;
//         const lng = hotel.PlaceSearchResponse.geometry.location.lng;

//         new google.maps.Marker({
//             position:{lat, lng},
//             map: map
//         });
//     });
// }






// const placeID = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${locationValue}&inputtype=textquery&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA`;

// const hotelInfo= `https://my-little-cors-proxy.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels-in-${locationValue}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;

// const parksInfo= `https://my-little-cors-proxy.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=parks-in-${locationValue}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;

// const storeInfo= `https://my-little-cors-proxy.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=stores-in-${locationValue}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;

// const vetInfo= `https://my-little-cors-proxy.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=vets-in-${locationValue}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;

// pg2
// function get(url) {
//     return fetch(url)
//         .then(function(response) {
//             return response.json()
//         })
//         .then(function(data) {
//             return data;
//         })
//         .catch(function(error) {
//             return error;
//         });
// }

// function markHotels(object){
//     object.forEach(function(hotel) {
//         const lat = hotel.result.geometry.location.lat;
//         const lng = hotel.result.geometry.location.lng;

//         new google.maps.Marker({
//             position:{lat, lng},
//             map: map
//         });
//     });
// }


// function markParks(object){
//     object.forEach(function(park) {
//         const lat = park.result.geometry.location.lat;
//         const lng = park.result.geometry.location.lng;

//         new google.maps.Marker({
//             position:{lat, lng},
//             map: map
//         });
//     });
// }

// function markPetStores(object){
//     object.forEach(function(store) {
//         const lat = store.result.geometry.location.lat;
//         const lng = store.result.geometry.location.lng;

//         new google.maps.Marker({
//             position:{lat, lng},
//             map: map
//         });
//     });
// }

// function markVets(object){
//     object.forEach(function(vet) {
//         const lat = vet.result.geometry.location.lat;
//         const lng = vet.result.geometry.location.lng;

//         new google.maps.Marker({
//             position:{lat, lng},
//             map: map
//         });
//     });
// }

// function updateMap() {
//     get(hotelInfo)
//     .then(function(response){
//         markHotels(response);
//     }); 

//     get(parksInfo)
//     .then(function(response){
//         markParks(response);
//     })

//     get(storeInfo)
//     .then(function(response){
//         markPetStores(response);
//     })

//     get(vetInfo)
//     .then(function(response){
//         markVets(response);
//     })
// }

// callBack(loc){

// }




















