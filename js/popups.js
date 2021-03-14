map.on('load', function () {

            map.addSource('places', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'properties': {
                                'description':
                                    '<strong>Zoo</strong><br><i>autobusová zastávka</i><p><i class="fas fa-bus"></i> <strong>|31|</strong> <i class="fas fa-bus"></i>   <strong>|39|</strong> <i class="fas fa-bus"></i>   <strong>|N31|</strong></p>'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [17.074561715126038,48.154602571605]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description':
                                    '<strong>Zoo</strong><br><i>autobusová zastávka</i><p><i class="fas fa-bus"></i> <strong>|31|</strong> <i class="fas fa-bus"></i>   <strong>|39|</strong> <i class="fas fa-bus"></i>   <strong>|N31|</strong></p>'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [17.075119614601135,48.154130177564134]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description':
                                    '<strong>Zoo</strong><br><i>autobusová zastávka</i><p><i class="fas fa-bus"></i> <strong>|30|</strong> <i class="fas fa-bus"></i>   <strong>|32|</strong> <i class="fas fa-bus"></i>   <strong>|37|</strong> <i class="fas fa-bus"></i>   <strong>|92|</strong> <br> <i class="fas fa-bus"></i>   <strong>|192|</strong> <i class="fas fa-bus"></i>   <strong>|N29|</strong></p>'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [17.0757794380188, 48.1546562524708]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description':
                                    '<strong>Zoo</strong><br><i>autobusová zastávka</i><p><i class="fas fa-bus"></i> <strong>|30|</strong> <i class="fas fa-bus"></i>   <strong>|32|</strong> <i class="fas fa-bus"></i>   <strong>|37|</strong> <i class="fas fa-bus"></i>   <strong>|92|</strong> <br> <i class="fas fa-bus"></i>   <strong>|192|</strong> <i class="fas fa-bus"></i>   <strong>|N29|</strong></p>'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [17.076922059059143, 48.15405860233006]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description':
                                    '<strong>Botanická záhrada</strong><br><i>autobusová zastávka</i><p><i class="fas fa-bus"></i> <strong>|29|</strong> <i class="fas fa-bus"></i>   <strong>|32|</strong> <i class="fas fa-bus"></i>   <strong>|N29|</strong> <br> <i class="fas fa-bus"></i>   <strong>|N33|</strong> <i class="fas fa-bus"></i>   <strong>|N34|</strong></p>'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [17.072024345397946, 48.14833226011215]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description':
                                    '<strong>Botanická záhrada</strong><br><i>autobusová zastávka</i><p><i class="fas fa-bus"></i> <strong>|29|</strong> <i class="fas fa-bus"></i>   <strong>|32|</strong> <i class="fas fa-bus"></i>   <strong>|N29|</strong> <br> <i class="fas fa-bus"></i>   <strong>|N33|</strong> <i class="fas fa-bus"></i>   <strong>|N34|</strong></p>'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [17.072308659553528, 48.14791349626556]
                            }
                        }
                    ]
                }
            });

            map.addLayer({
                'id': 'places',
                'type': 'symbol',
                'source': 'places',
                'layout': {
                    'icon-image': 'bus',
                    'icon-allow-overlap': true,
                    'icon-size': 2
                }
            });

          events('mouseenter','mouseenter','mouseleave','places') ;
});


map.on('load', function () {

    map.addSource('trails', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Botanická záhrada</strong><br><i>zastávka električky</i><p><i class="fas fa-subway"></i> <strong>|4|</strong> <i class="fas fa-subway"></i>   <strong>|9|</strong></p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [17.07178294658661,48.14813540573805]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Botanická záhrada</strong><br><i>zastávka električky</i><p><i class="fas fa-subway"></i> <strong>|4|</strong> <i class="fas fa-subway"></i>   <strong>|9|</strong> </p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [17.07246959209442,48.148121089026866]
                    }
                }
            ]
        }
    });

    map.addLayer({
        'id': 'trails',
        'type': 'symbol',
        'source': 'trails',
        'layout': {
            'icon-image': 'rail',
            'icon-allow-overlap': true,
            'icon-size': 2
        }
    });

events('mouseenter','mouseenter','mouseleave','trails');

});

function events(onClick,mouse,mouseleave,id){
    var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    map.on(onClick, id, function (e) {

        map.getCanvas().style.cursor = 'pointer';

        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;


        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        popup.setLngLat(coordinates).setHTML(description).addTo(map);
    });

    map.on(mouse, id, function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on(mouseleave, id, function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
}