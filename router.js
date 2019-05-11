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
            console.log(req.body);
            res.contentType('json');
            res.send(JSON.stringify(req.body));
        });

        return router;
    }
};