// prescripciones.js
const express = require('express');
const router = express.Router();
const PrescripcionesController = require('../controllers/prescripcionesController');

router.get('/', PrescripcionesController.getAllPrescripciones);

// Agregar más rutas según sea necesario

module.exports = router;
