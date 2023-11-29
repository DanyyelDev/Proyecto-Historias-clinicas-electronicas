// prescripcionesDTO.js
class PrescripcionesDTO {
    constructor(id_prescripcion, id_paciente, id_medicamento, fecha_prescripcion, dosis, duracion) {
      this.id_prescripcion = id_prescripcion;
      this.id_paciente = id_paciente;
      this.id_medicamento = id_medicamento;
      this.fecha_prescripcion = fecha_prescripcion;
      this.dosis = dosis;
      this.duracion = duracion;
    }
  
    // Agregar más propiedades y métodos según sea necesario
  }
  
  module.exports = PrescripcionesDTO;
  