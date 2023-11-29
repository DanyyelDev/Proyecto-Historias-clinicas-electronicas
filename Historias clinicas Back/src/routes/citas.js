const express = require('express');
const router = express.Router();
const CitasController = require('../controllers/citasController');

// Ruta para agregar una nueva cita
router.post('/solicitar-cita', CitasController.solicitarCita);

// Rutas existentes...
router.get('/', CitasController.getAllCitas);

// Agregar más rutas según sea necesario

module.exports = router;
