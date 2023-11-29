const express = require('express');
const router = express.Router();
const PacientesController = require('../controllers/pacientesController');

// Ruta para obtener todos los pacientes
router.get('/', PacientesController.getAllPacientes);

// Ruta para agregar un nuevo paciente
router.post('/agregar', PacientesController.agregarPaciente);

// Agregar más rutas según sea necesario

module.exports = router;