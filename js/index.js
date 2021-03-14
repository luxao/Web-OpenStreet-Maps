

mapboxgl.accessToken = 'pk.eyJ1IjoibHV4YW8iLCJhIjoiY2tndjNwNHBsMWE3bDMwa3lzdGZxZTFvcSJ9.Es9j1uAyDgHPQccj-2_qGA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 17,
    center:[17.072995,48.151965]
});


map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        destinationInput: 'Accenture Bratislava Campus Office, Slovenska Technicka Univerzita V Bratislave, Fakulta elektrotechniky a informatiky, Ilkovicova 3, Bratislava, Bratislava 841 04, Slovakia',
        placeholderDestination: 'Accenture Bratislava Campus Office, Slovenska Technicka Univerzita V Bratislave, Fakulta elektrotechniky a informatiky, Ilkovicova 3, Bratislava, Bratislava 841 04, Slovakia',
        destinationQuery: 'Accenture Bratislava Campus Office, Slovenska Technicka Univerzita V Bratislave, Fakulta elektrotechniky a informatiky, Ilkovicova 3, Bratislava, Bratislava 841 04, Slovakia',
        destination: 'Accenture Bratislava Campus Office, Slovenska Technicka Univerzita V Bratislave, Fakulta elektrotechniky a informatiky, Ilkovicova 3, Bratislava, Bratislava 841 04, Slovakia',
        DESTINATION: 'Accenture Bratislava Campus Office, Slovenska Technicka Univerzita V Bratislave, Fakulta elektrotechniky a informatiky, Ilkovicova 3, Bratislava, Bratislava 841 04, Slovakia',
        // distance: 'km',
        //skúšal som to nastavit na km ale nešlo mi to
        // units: 'km',
        // setUnit: 'km',
        // setUniform: 'km',
        // unitType: 'km',
        // newValueSpecifiedUnits:'km',
        // convertToSpecifiedUnits: 'km',
        // convertDistance: 'km',
        // meterInMercatorCoordinateUnits: true,
        // distanceTo: 'km'

    }),
    'top-left'
);


var marker = new mapboxgl.Marker()
    .setLngLat([17.072995,48.151965])
    .addTo(map);

// map.on('click',function (){
//     var popup = new mapboxgl.Popup({ closeOnClick: false })
//         .setLngLat([17.072995,48.151965])
//         .setHTML('<strong>FEI STU,Ilkovičova 3, Bratislava</strong>')
//         .addTo(map);
// })

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.FullscreenControl());
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
);







