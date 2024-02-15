const express = require('express');
const applicantsController = require('../controllers/applicantsController');
const router = express.Router();

router.get('/', applicantsController.all);
router.get('/:id', applicantsController.detail);
router.post('/create', applicantsController.add);
router.put('/edit/:id', applicantsController.edit);
router.delete('/delete/:id', applicantsController.remove);

module.exports = router;