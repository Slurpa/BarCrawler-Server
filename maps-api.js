module.exports = class MapsAPI {
    constructor() {
        this.client = require('@google/maps').createClient({
            key     : process.env.API_KEY,
            Promise : Promise,
        });
    }

    test() {
        return 'Okaeri~!';
    }
};