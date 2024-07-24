const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/', siteController.index);
router.get('/:slug', siteController.show);

module.exports = router;
