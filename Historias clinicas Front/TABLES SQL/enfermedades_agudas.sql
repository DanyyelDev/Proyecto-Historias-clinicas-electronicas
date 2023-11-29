CREATE TABLE enfermedades_agudas (
    id_enfermedad_a INT PRIMARY KEY AUTO_INCREMENT,
    id_paciente INT,
    nombre_enfermedad VARCHAR(50) NOT NULL,
    descripcion_enfermedad TEXT,
    fecha_diagnostico DATE,
    FOREIGN KEY (id_paciente) REFERENCES pacientes(id)
);
