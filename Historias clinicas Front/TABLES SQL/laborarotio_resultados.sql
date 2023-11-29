CREATE TABLE laboratorios (
    id_laboratorio INT PRIMARY KEY AUTO_INCREMENT,
    nombre_laboratorio VARCHAR(50) NOT NULL
);

CREATE TABLE resultados_laboratorio (
    id_resultado INT PRIMARY KEY AUTO_INCREMENT,
    id_paciente INT,
    id_laboratorio INT,
    fecha_resultado DATE,
    resultado TEXT,
    FOREIGN KEY (id_paciente) REFERENCES pacientes(id),
    FOREIGN KEY (id_laboratorio) REFERENCES laboratorios(id_laboratorio)
);