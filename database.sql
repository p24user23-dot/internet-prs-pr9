DROP DATABASE IF EXISTS variant17;
CREATE DATABASE variant17;
USE variant17;

CREATE TABLE hospitals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL
);

CREATE TABLE doctors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    specialty VARCHAR(255) NOT NULL,
    hospital_id INT,
    FOREIGN KEY (hospital_id) REFERENCES hospitals(id) ON DELETE CASCADE
);

CREATE TABLE patients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    age INT,
    doctor_id INT,
    FOREIGN KEY (doctor_id) REFERENCES doctors(id) ON DELETE CASCADE
);

-- тестові дані
INSERT INTO hospitals (name, address) VALUES 
('Міська лікарня №1', 'вул. Шевченка, 12'),
('Медичний центр "Здоров`я"', 'пр. Перемоги, 45');

INSERT INTO doctors (full_name, specialty, hospital_id) VALUES 
('Іваненко Іван Іванович', 'Хірург', 1),
('Петренко Петро Петрович', 'Терапевт', 1),
('Сидоренко Анна Михайлівна', 'Кардіолог', 2);

INSERT INTO patients (full_name, age, doctor_id) VALUES 
('Коваленко Марія Олександрівна', 34, 1),
('Григоренко Максим Васильович', 45, 2),
('Лисенко Олена Юріївна', 28, 3);
