CREATE TABLE citas (
    id_cita INT PRIMARY KEY AUTO_INCREMENT,
    id_paciente INT,
    fecha_cita DATETIME,
    motivo_cita TEXT,
    estado ENUM('Programada', 'En curso', 'Completada', 'Cancelada'),
    notas TEXT,
    FOREIGN KEY (id_paciente) REFERENCES pacientes(id)
);
