// historiasDTO.js
class HistoriasDTO {
    constructor(id_historia_clinica,id_paciente,fecha_creacion,motivo_consulta,antecedentes_personales,
      antecedentes_familiares,examen_fisico,diagnostico,tratamiento,observaciones) {

      this.id_historia_clinica = id_historia_clinica;
      this.id_paciente = id_paciente;
      this.fecha_creacion = fecha_creacion;
      this.motivo_consulta = motivo_consulta;
      this.antecedentes_personales = antecedentes_personales;
      this.antecedentes_familiares = antecedentes_familiares;
      this.examen_fisico = examen_fisico;
      this.diagnostico = diagnostico;
      this.tratamiento = tratamiento;
      this.observaciones = observaciones;
    }
  
    // Agregar más propiedades y métodos según sea necesario
  }
  
  module.exports = HistoriasDTO;
  