// app.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const usuariosRouter = require('./routes/usuarios');
const resultadosDeLaboratorioRouter = require('./routes/resultados_laboratorio');
const prescripcionesRouter = require('./routes/prescripciones');
const pacientesRouter = require('./routes/pacientes');
const historiasRouter = require('./routes/historias_clinicas');
const citasRouter = require('./routes/citas');
const enfermedadesAgudasRouter = require('./routes/enfermedades_agudas');
const enfermedadesCronicasRouter = require('./routes/enfermedades_cronicas');
const enfermedadesSubAgudasRouter = require('./routes/enfermedades_sub_agudas');
const imagenesMedicas = require('./routes/imagenesMedicas');
// Agregar más rutas según sea necesario

app.use('/api/usuarios', usuariosRouter);
app.use('/api/resultados-laboratorio', resultadosDeLaboratorioRouter);
app.use('/api/prescripciones', prescripcionesRouter)
app.use('/api/pacientes', pacientesRouter)
app.use('/api/historias', historiasRouter)
app.use('/api/citas', citasRouter)
app.use('/api/enfermedades-agudas', enfermedadesAgudasRouter)
app.use('/api/enfermedades-cronicas', enfermedadesCronicasRouter)
app.use('/api/enfermedades-sub-agudas', enfermedadesSubAgudasRouter)
app.use('/api/imagenes', imagenesMedicas)
// Agregar más rutas según sea necesario

const port = 3002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;