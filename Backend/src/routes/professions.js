const express = require('express');
const professionsController = require('../controllers/professionsController');
const router = express.Router();

router.get('/', professionsController.all);
router.get('/:id', professionsController.list);
router.post('/', professionsController.add);
router.post('/edit/:id', professionsController.edit);
router.delete('/:id', professionsController.remove);

module.exports = router;