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
    // updateMap();    
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

    // Grabbing just the location of the inputed city
    let inputDestination = `https://my-little-cors-proxy.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=${locationInput}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA`;
    
    //Makes the screen go to the location of the inputed city
    get(inputDestination)
    .then(function(response) {
        const destinationlat = Number(response.results[0].geometry.location.lat);
        const destinationlong = Number(response.results[0].geometry.location.lng);
        initMap(destinationlat, destinationlong);
    });

    get(hotelInfo)
    .then(function(response) {
        const results = response.results;
        let latArray = [];
        let longArray = [];
        results.forEach((result) => {
            // console.log("result is", result);
            const lat = Number(result.geometry.location.lat);
            const long = Number(result.geometry.location.lng);
            latArray.push(lat);
            longArray.push(long);
        });
    return [latArray, longArray];
    })

    .then(function(coordArray) {
        const latArray = coordArray[0];
        const longArray = coordArray[1];
        markPlaces(latArray,longArray);
    });

};
          
// function setParkLocation() {
//     // Grabbing the user input
//     const locationInput = document.querySelector('#search-bar').value;

//     // Grabbing the API library for parks and inputing the user input 
//     let parksInfo = `https://my-little-cors-proxy.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=parks-in-${locationInput}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;

//     get(parksInfo)
//         .then(function(response) {
//             const results = response.results;
//             console.log(results);
//             let parklatArray = [];
//             let parklongArray = [];
//             results.forEach((result) => {
//                 // console.log("result is", result);
//                 const lat = Number(result.geometry.location.lat);
//                 const long = Number(result.geometry.location.lng);
//                 parklatArray.push(lat);
//                 parklongArray.push(long);
//             });
//         return [parklatArray, parklongArray];
//         })

//         .then(function(coordArray) {
//             console.log()
//             const parklatArray = coordArray[0];
//             const parklongArray = coordArray[1];
//             initMap(parklatArray, parklongArray);
//         });
// }         



function initMap(latitude, longitude){
    const options = {
        zoom: 10,
        //took out [0]s 
        center: {lat:latitude,lng:longitude},
        }
        const NewMap = new google.maps.Map(document.getElementById('map'), options);
        // new google.maps.Marker({
        //     position:{lat: latitude[0], lng:longitude[0]},
        //     map: map
        // });
}


function markPlaces(latitude, longitude) {
    // const map = new google.maps.Map(document.getElementById('map'));
    new google.maps.Marker({
        position:{lat: latitude[0], lng: longitude[0]},
        map: map
    });
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

callBack(loc){

}




















