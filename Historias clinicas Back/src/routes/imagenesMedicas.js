const express = require('express');
const router = express.Router();
const ImagenesMedicasController = require('../controllers/imagenesMedicasController');
const multer = require('multer');

// Configuración de multer para gestionar la carga de archivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/subirImagen', upload.single('image'), ImagenesMedicasController.subirImagen);

module.exports = router;
