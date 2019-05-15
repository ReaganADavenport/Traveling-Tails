


function getMap(location){
    const zip = input.innerHTML;
    const mapURL = `http://maps.google.com/maps?q=${zip}&output=embed`;
    const iframe = document.createElement('iframe');
    iframe.src = mapURL;
    document.querySelector(".images").append(iframe);
}