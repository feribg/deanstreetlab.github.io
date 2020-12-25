function initMap() {

    var myLatLng = {
        lat: 54.7732,
        lng: -1.5764
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: myLatLng,
        disableDefaultUI: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
        zoomControl: true
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        icon: "https://i.ibb.co/8KnRjYg/map-cursor.png",
        map: map,
        title: "Dean Street",
        optimized: false
    });

    var overlay = new google.maps.OverlayView()    
}