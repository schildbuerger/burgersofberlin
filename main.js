Vue.component('google-map', {

    template: `

        <div class="google-map" :id="mapName">
        </div>

`,
    name: 'google-map',
    props: ['name'],
    data: function () {
        return {
            mapName: this.name,
            markerCoordinates: [{
                latitude: 52.52727,
                longitude: 13.39877
    }, {
                latitude: 52.53236,
                longitude: 13.3976
    }, {
                latitude: 52.50108,
                longitude: 13.44232
    }]
        }
    },

    mounted: function () {
        const bounds = new google.maps.LatLngBounds();
        const element = document.getElementById(this.mapName)
        const options = {
            center: new google.maps.LatLng(52.5065133, 13.1445529),
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ebe3cd"
      }
    ]
  },
                {
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "weight": 1
      }
    ]
  },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#523735"
      }
    ]
  },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#f5f1e6"
      }
    ]
  },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "off"
      }
    ]
  },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#c9b2a6"
      }
    ]
  },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [
                        {
                            "visibility": "off"
      }
    ]
  },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#dcd2be"
      }
    ]
  },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#ae9e90"
      }
    ]
  },
                {
                    "featureType": "administrative.neighborhood",
                    "stylers": [
                        {
                            "visibility": "off"
      }
    ]
  },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dfd2ae"
      }
    ]
  },
                {
                    "featureType": "poi",
                    "stylers": [
                        {
                            "visibility": "off"
      }
    ]
  },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dfd2ae"
      }
    ]
  },
                {
                    "featureType": "poi",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
      }
    ]
  },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#93817c"
      }
    ]
  },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#a5b076"
      }
    ]
  },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#447530"
      }
    ]
  },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f1e6"
      }
    ]
  },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
      }
    ]
  },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
      }
    ]
  },
                {
                    "featureType": "road.arterial",
                    "stylers": [
                        {
                            "visibility": "off"
      }
    ]
  },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#fdfcf8"
      }
    ]
  },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f8c967"
      }
    ]
  },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#e9bc62"
      }
    ]
  },
                {
                    "featureType": "road.highway",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
      }
    ]
  },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e98d58"
      }
    ]
  },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#db8555"
      }
    ]
  },
                {
                    "featureType": "road.local",
                    "stylers": [
                        {
                            "visibility": "off"
      }
    ]
  },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#806b63"
      }
    ]
  },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "visibility": "off"
      }
    ]
  },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dfd2ae"
      }
    ]
  },
                {
                    "featureType": "transit.line",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#8f7d77"
      }
    ]
  },
                {
                    "featureType": "transit.line",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#ebe3cd"
      }
    ]
  },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dfd2ae"
      }
    ]
  },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#b9d3c2"
      }
    ]
  },
                {
                    "featureType": "water",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
      }
    ]
  },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#92998d"
      }
    ]
  }
]

        }

        const map = new google.maps.Map(element, options)

        this.markerCoordinates.forEach((coord) => {
            const position = new google.maps.LatLng(coord.latitude, coord.longitude);
            const marker = new google.maps.Marker({
                position,
                map
            });

            map.fitBounds(bounds.extend(position));
        });
    }

})


new Vue({

    el: '#root'

});
