CREATE TABLE enfermedades_sub_agudas (
    id_enfermedad_b INT PRIMARY KEY AUTO_INCREMENT,
    id_paciente INT,
    nombre_enfermedad VARCHAR(50) NOT NULL,
    gravedad ENUM('Leve', 'Moderada', 'Grave'),
    fecha_diagnostico DATE,
    FOREIGN KEY (id_paciente) REFERENCES pacientes(id)
);
