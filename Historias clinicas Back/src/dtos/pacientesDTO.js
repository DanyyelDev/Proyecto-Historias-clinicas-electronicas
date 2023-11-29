// pacientesDTO.js
class PacientesDTO {
  constructor(nombre,apellido,fecha_nacimiento,genero,direccion,ciudad,estado,codigo_postal,
    telefono,correo_electronico,fecha_registro) {

    this.nombre = nombre;
    this.apellido = apellido;
    this.fecha_nacimiento = fecha_nacimiento;
    this.genero = genero;
    this.direccion = direccion;
    this.ciudad = ciudad;
    this.estado = estado;
    this.codigo_postal = codigo_postal;
    this.telefono = telefono;
    this.correo_electronico = correo_electronico;
    this.fecha_registro = fecha_registro;
  }

  // Agregar más propiedades y métodos según sea necesario
}

module.exports = PacientesDTO;


