class ImagenesMedicasDTO {
    constructor(id, id_paciente, nombre_archivo, tipo_archivo, tamano_archivo, fecha_subida) {
      this.id = id;
      this.id_paciente = id_paciente;
      this.nombre_archivo = nombre_archivo;
      this.tipo_archivo = tipo_archivo;
      this.tamano_archivo = tamano_archivo;
      this.fecha_subida = fecha_subida;
    }
  }
  
  module.exports = ImagenesMedicasDTO;
  