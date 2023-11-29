// enfermedades_cronicas.js
const express = require('express');
const router = express.Router();
const EnfermedadesCronicasController = require('../controllers/enfermedades_cronicasController');

router.get('/', EnfermedadesCronicasController.getAllEnfermedadesCronicas);

// Agregar más rutas según sea necesario

module.exports = router;
