const express = require('express');
const companiesController = require('../controllers/companiesController');
const router = express.Router();

router.get('/', companiesController.all);
router.get('/:id', companiesController.detail);
router.post('/create', companiesController.add);
router.put('/edit/:id', companiesController.edit);
router.delete('/delete/:id', companiesController.remove);

module.exports = router;