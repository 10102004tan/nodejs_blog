const express = require('express');
const router = express.Router();

const postController = require('../app/controllers/PostController');

router.get('/', postController.index);
router.get('/create', postController.create);
module.exports = router;
