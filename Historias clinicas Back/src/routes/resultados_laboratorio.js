// usuarios.js
const express = require('express');
const router = express.Router();
const ResultadosLaboratorioController = require('../controllers/resultados_laboratorioController');

router.get('/', ResultadosLaboratorioController.getAllResultadosLaboratorio);

// Agregar más rutas según sea necesario

module.exports = router;
