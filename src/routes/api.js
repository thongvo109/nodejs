const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/site_controller');

router.get('/store', siteController.indexJson);

module.exports = router;
