const express = require('express');
const aplicantsController = require('../controllers/aplicantsController');
const router = express.Router();

router.get('/', aplicantsController.all);
router.get('/:id', aplicantsController.list);
router.post('/', aplicantsController.add);
router.post('/editar/:id', aplicantsController.edit);
router.delete('/:id', aplicantsController.remove);

module.exports = router;