const MapsAPI = require('./maps-api.js');

module.exports = class Place extends MapsAPI {
    constructor() {
        super();
    }

    searchPlacesNearby(request) {
        const query = {
            location : [request.lat, request.lng],
            radius   : 100,
            keyword  : request.query || '',
        };

        this.client.placesNearby(query)
            .asPromise()
            .then(response => {
                console.log(response.json.results);
            })
            .catch(error => {
                console.log(error);
            });
    }
};