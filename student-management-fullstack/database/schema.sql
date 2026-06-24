CREATE TABLE IF NOT EXISTS appointments (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    patient_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    service VARCHAR(80) NOT NULL,
    preferred_date DATE NOT NULL,
    message VARCHAR(500),
    status VARCHAR(30) NOT NULL DEFAULT 'NEW',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_appointments_phone (phone),
    INDEX idx_appointments_status (status),
    INDEX idx_appointments_preferred_date (preferred_date)
);

INSERT INTO appointments (patient_name, phone, service, preferred_date, message, status)
VALUES
('Amit Kumar', '9334066155', 'Cardiology OPD', CURRENT_DATE, 'Chest discomfort consultation request', 'NEW'),
('Sana Parveen', '9905649373', 'Diagnostics', CURRENT_DATE, 'ECG and ultrasound enquiry', 'CONTACTED');
