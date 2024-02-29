const express = require('express');
const companiesController = require('../controllers/companiesController');
const registerValidations = require("../middlewares/companyRegisterValidator");
const multer = require("../middlewares/companyMulter");

const router = express.Router();

router.get('/', companiesController.all);
router.get('/:id', companiesController.detail);

router.post('/create', multer.single("logo"), registerValidations, companiesController.add);
router.put('/edit/:id', companiesController.edit);
router.delete('/delete/:id', companiesController.remove);

module.exports = router;