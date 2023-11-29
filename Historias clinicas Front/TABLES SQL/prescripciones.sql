CREATE TABLE prescripciones (
    id_prescripcion INT PRIMARY KEY AUTO_INCREMENT,
    id_paciente INT,
    id_medicamento INT,
    fecha_prescripcion DATE,
    dosis TEXT,
    duracion TEXT,
    FOREIGN KEY (id_paciente) REFERENCES pacientes(id),
    FOREIGN KEY (id_medicamento) REFERENCES medicamentos(id_medicamento)
);