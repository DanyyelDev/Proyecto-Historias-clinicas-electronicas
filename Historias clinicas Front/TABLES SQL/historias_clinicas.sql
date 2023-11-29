CREATE TABLE historias_clinicas (
    id_historia_clinica INT PRIMARY KEY AUTO_INCREMENT,
    id_paciente INT,
    fecha_creacion DATE,
    motivo_consulta TEXT,
    antecedentes_personales TEXT,
    antecedentes_familiares TEXT,
    examen_fisico TEXT,
    diagnostico TEXT,
    tratamiento TEXT,
    observaciones TEXT,
    FOREIGN KEY (id_paciente) REFERENCES pacientes(id)
);