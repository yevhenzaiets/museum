mapboxgl.accessToken = 'pk.eyJ1IjoieWV2aGVuNzc3IiwiYSI6ImNsMWozY2tpZjA1bTEzbGsxZnRqZ3V2NHUifQ.q46RenJVTZH0lIErPxOgww';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/yevhen777/cl1jgm9pq002i14ju6v0rjhon',
    center: [2.3364, 48.86091],
    zoom: 16
});

map.on('load', () => {
    map.addSource('mapillary', {
        'type': 'vector',
        'tiles': [
            'https://tiles.mapillary.com/maps/vtp/mly1_public/2/{z}/{x}/{y}?access_token=MLY|4142433049200173|72206abe5035850d6743b23a49c41333'
        ],
        'minzoom': 6,
        'maxzoom': 14
    });
    map.addLayer(
        {
            'id': 'mapillary', 
            'type': 'line',
            'source': 'mapillary', 
            'source-layer': 'sequence',
            'layout': {
                'line-cap': 'round',
                'line-join': 'round'
            },
            'paint': {
                'line-opacity': 0.6,
                'line-color': 'rgb(53, 175, 109)',
                'line-width': 2
            }
        },
        'road-label' 
    );
});

map.addControl(new mapboxgl.NavigationControl());

const marker = new mapboxgl.Marker({color: "#778899",})
    .setLngLat([2.3364, 48.86091])
    .addTo(map);

const marker2 = new mapboxgl.Marker({color: "#778899",})
    .setLngLat([2.3333, 48.8602])
    .addTo(map);

const marker3 = new mapboxgl.Marker({color: "#778899",})
    .setLngLat([2.3330, 48.8619])
    .addTo(map);

const marker4 = new mapboxgl.Marker({color: "#778899",})
    .setLngLat( [2.3397, 48.8607])
    .addTo(map);

const marker5 = new mapboxgl.Marker({color: "#778899",})
    .setLngLat([2.3365, 48.8625])
    .addTo(map);



