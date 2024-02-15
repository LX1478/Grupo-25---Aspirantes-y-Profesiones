const express = require('express');
const professionsController = require('../controllers/professionsController');
const router = express.Router();

router.get('/', professionsController.all);
router.get('/:id', professionsController.detail);
router.post('/create', professionsController.add);
router.put('/edit/:id', professionsController.edit);
router.delete('/delete/:id', professionsController.remove);

module.exports = router;