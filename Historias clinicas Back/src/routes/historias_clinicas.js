// historias_clinicas.js
const express = require('express');
const router = express.Router();
const HistoriasClinicasController = require('../controllers/historias_clinicasController');

router.get('/', HistoriasClinicasController.getAllHistorias);

// Agregar más rutas según sea necesario

module.exports = router;
