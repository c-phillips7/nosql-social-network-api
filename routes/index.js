const router = require('express').Router();

//import all API routes
const apiRoutes = require('./api');

//add prefix of '/api' to all routes called from api
router.use('/api', apiRoutes)

router.use((req, res) => {
    res.status(404).send('404 Error')
});

module.exports = router;