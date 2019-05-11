const Place = require('./place.js');

module.exports = {
    initRoutes (router) {
        router.get('/', function (req, res) {
            res.json({ message: 'hooray! welcome to our api!' });   
        });
        
        router.get('/place', function (req, res) {
            const test = new Place();
            res.send(test.test());
        });
        
        router.post('/place/search', function (req, res) {
            const request = req.body;
            const places  = new Place();

            res.contentType('json');
            places.searchPlacesNearby(request);
            res.send(JSON.stringify({test : 'Arigatou Gozaimasu~!'}));
        });

        return router;
    }
};