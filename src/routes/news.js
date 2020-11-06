const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/news_controller');

router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;
