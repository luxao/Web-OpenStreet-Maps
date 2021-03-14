map.on('load', function () {
    map.addSource('A', {
        'type': 'geojson',
        'data': {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            17.07253932952881,
                            48.15181466811292
                        ],
                        [
                            17.073901891708374,
                            48.15181466811292
                        ],
                        [
                            17.073901891708374,
                            48.1519685614724
                        ],
                        [
                            17.07253932952881,
                            48.1519685614724
                        ],
                        [
                            17.07253932952881,
                            48.15181466811292
                        ]
                    ]
                ]
            }
        }
    });
    map.addLayer({
        'id': 'A',
        'type': 'fill',
        'source': 'A',
        'layout': {},
        'paint': {
            'fill-color': '#BF5540',
            'fill-opacity': 0.8
        }
    });
    pushText('A','<strong>Blok A:</strong><p>Pedagogické oddelenie (PGO), <br> Inštitút komunikácie a aplikovanej lingivstiky (IKAL)<br>Ústav jadrového a fyzikálneho inžinierstva (ÚJFT)</p>');

});

map.on('load', function () {
    map.addSource('B', {
        'type': 'geojson',
        'data': {
            "type": "Polygon",
            "coordinates": [
                [
                    [
                        17.07298994064331,
                        48.15233003010628
                    ],
                    [
                        17.074379324913025,
                        48.15233003010628
                    ],
                    [
                        17.074379324913025,
                        48.152480343046044
                    ],
                    [
                        17.07298994064331,
                        48.152480343046044
                    ],
                    [
                        17.07298994064331,
                        48.15233003010628
                    ]
                ]
            ]
        }

    });
    map.addLayer({
        'id': 'B',
        'type': 'fill',
        'source': 'B',
        'layout': {},
        'paint': {
            'fill-color': '#44C1AA',
            'fill-opacity': 0.8
        }
    });
    pushText('B','<strong>Blok B:</strong><p>Ústav elektrotechniky (ÚE)<br>Ústav multimediálnych informačných a komunikačných technologií (ÚMIKT)</p>');

});

map.on('load', function () {
    map.addSource('C', {
        'type': 'geojson',
        'data': {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            17.072560787200928,
                            48.15280959842314
                        ],
                        [
                            17.073885798454285,
                            48.15280959842314
                        ],
                        [
                            17.073885798454285,
                            48.1529849618378
                        ],
                        [
                            17.072560787200928,
                            48.1529849618378
                        ],
                        [
                            17.072560787200928,
                            48.15280959842314
                        ]
                    ]
                ]
            }
        }
    });
    map.addLayer({
        'id': 'C',
        'type': 'fill',
        'source': 'C',
        'layout': {},
        'paint': {
            'fill-color': '#39AC52',
            'fill-opacity': 0.8
        }
    });
    pushText('C','<strong>Blok C:</strong><p>Ústav elektroenergetiky a aplikovanej elektrotechniky (ÚEAE)<br>Ústav informatiky a matematiky(ÚIM)</p>');

});

map.on('load', function () {
    map.addSource('D', {
        'type': 'geojson',
        'data': {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            17.073193788528442,
                            48.15333568686922
                        ],
                        [
                            17.074384689331055,
                            48.15333568686922
                        ],
                        [
                            17.074384689331055,
                            48.1534752604496
                        ],
                        [
                            17.073193788528442,
                            48.1534752604496
                        ],
                        [
                            17.073193788528442,
                            48.15333568686922
                        ]
                    ]
                ]
            }
        }
    });
    map.addLayer({
        'id': 'D',
        'type': 'fill',
        'source': 'D',
        'layout': {},
        'paint': {
            'fill-color': '#4B39AC',
            'fill-opacity': 0.8
        }
    });
    pushText('D','<strong>Blok D:</strong><p>Ústav automobilovej mechatroniky (ÚAMT)<br>Ústav robotiky a kybernetiky(ÚRK)</p>');
});

map.on('load', function () {
    map.addSource('E', {
        'type': 'geojson',
        'data': {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            17.072555422782898,
                            48.15382598212978
                        ],
                        [
                            17.073896527290344,
                            48.15382598212978
                        ],
                        [
                            17.073896527290344,
                            48.15397986945726
                        ],
                        [
                            17.072555422782898,
                            48.15397986945726
                        ],
                        [
                            17.072555422782898,
                            48.15382598212978
                        ]
                    ]
                ]
            }
        }
    });
    map.addLayer({
        'id': 'E',
        'type': 'fill',
        'source': 'E',
        'layout': {},
        'paint': {
            'fill-color': 'red',
            'fill-opacity': 0.8
        }
    });

    pushText('E','<strong>Blok E:</strong><p>Ústav elektroniky a fotoniky (ÚEF)</p>');
});

map.on('load', function () {
    map.addSource('T', {
        'type': 'geojson',
        'data': {
            "type": "Feature",
            "properties": {
                'description':
                    '<strong>Telocvične:</strong><p>Jazz-influenced hip hop artist</p>',
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            17.07254469394684,
                            48.1529849618378
                        ],
                        [
                            17.072812914848328,
                            48.1529849618378
                        ],
                        [
                            17.072812914848328,
                            48.15445584361856
                        ],
                        [
                            17.07254469394684,
                            48.15445584361856
                        ],
                        [
                            17.07254469394684,
                            48.1529849618378
                        ]
                    ]
                ]
            }
        }
    });
    map.addLayer({
        'id': 'T',
        'type': 'fill',
        'source': 'T',
        'layout': {},
        'paint': {
            'fill-color': 'yellow',
            'fill-opacity': 0.8
        }
    });


    pushText('T','<strong>Telocvične:</strong><p>Plaváreň,posilňovňa,veľká a malá telocvičňa</p>');
});

function pushText(id,text){
    map.on('click', id, function (e) {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(text)
            .addTo(map);
    });
    map.on('mouseenter', id, function () {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', id, function () {
        map.getCanvas().style.cursor = '';
    });
}
