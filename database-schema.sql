-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS bclapinrtacyy0u6fahe;
USE bclapinrtacyy0u6fahe;

-- Tabla de usuarios
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  role ENUM('admin', 'client', 'carrier') NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabla de clientes
CREATE TABLE clients (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  client_code VARCHAR(20) NOT NULL UNIQUE,
  company_name VARCHAR(255) NOT NULL,
  contact_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  address TEXT NOT NULL,
  status ENUM('Activo', 'Inactivo', 'Pendiente') NOT NULL DEFAULT 'Activo',
  client_type VARCHAR(50) NOT NULL,
  registration_date DATE NOT NULL,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Tabla de proveedores (carriers)
CREATE TABLE carriers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  carrier_code VARCHAR(20) NOT NULL UNIQUE,
  company_name VARCHAR(255) NOT NULL,
  contact_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  address TEXT NOT NULL,
  status ENUM('Activo', 'Inactivo', 'Pendiente') NOT NULL DEFAULT 'Activo',
  carrier_type VARCHAR(50) NOT NULL,
  registration_date DATE NOT NULL,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Tabla de contratos
CREATE TABLE contracts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  contract_code VARCHAR(20) NOT NULL UNIQUE,
  client_id INT,
  provider_id INT,
  service_type ENUM('Terrestre', 'Aéreo', 'Marítimo', 'Almacenamiento') NOT NULL,
  subservice VARCHAR(50),
  route VARCHAR(255),
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  status ENUM('Activo', 'Pendiente', 'Vencido', 'Cancelado') NOT NULL DEFAULT 'Activo',
  value DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(3) NOT NULL DEFAULT 'MXN',
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE SET NULL,
  FOREIGN KEY (provider_id) REFERENCES carriers(id) ON DELETE SET NULL
);

-- Tabla de embarques
CREATE TABLE shipments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  shipment_code VARCHAR(20) NOT NULL UNIQUE,
  client_id INT,
  carrier_id INT,
  service_type ENUM('Terrestre', 'Aéreo', 'Marítimo', 'Almacenamiento') NOT NULL,
  subservice VARCHAR(50),
  origin VARCHAR(255) NOT NULL,
  destination VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  estimated_delivery DATE NOT NULL,
  current_location VARCHAR(255),
  eta DATETIME,
  status ENUM('En Tránsito', 'Entregado', 'Programado', 'Retrasado', 'Cancelado') NOT NULL DEFAULT 'Programado',
  progress INT NOT NULL DEFAULT 0,
  assigned_to VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE SET NULL,
  FOREIGN KEY (carrier_id) REFERENCES carriers(id) ON DELETE SET NULL
);

-- Tabla de actualizaciones de embarques
CREATE TABLE shipment_updates (
  id INT AUTO_INCREMENT PRIMARY KEY,
  shipment_id INT NOT NULL,
  status VARCHAR(50) NOT NULL,
  location VARCHAR(255),
  notes TEXT,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  image_url VARCHAR(255),
  created_by INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (shipment_id) REFERENCES shipments(id) ON DELETE CASCADE,
  FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
);

-- Tabla de solicitudes
CREATE TABLE requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  request_code VARCHAR(20) NOT NULL UNIQUE,
  client_id INT,
  service_type ENUM('Terrestre', 'Aéreo', 'Marítimo', 'Almacenamiento') NOT NULL,
  subservice VARCHAR(50),
  origin VARCHAR(255),
  destination VARCHAR(255),
  date DATE NOT NULL,
  status ENUM('Pendiente', 'En Proceso', 'Cotizado', 'Aprobado', 'Rechazado', 'Completado') NOT NULL DEFAULT 'Pendiente',
  priority ENUM('Alta', 'Media', 'Baja') NOT NULL DEFAULT 'Media',
  assigned_to VARCHAR(255),
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE SET NULL
);

-- Tabla de facturas
CREATE TABLE invoices (
  id INT AUTO_INCREMENT PRIMARY KEY,
  invoice_code VARCHAR(20) NOT NULL UNIQUE,
  shipment_id INT,
  carrier_id INT,
  client_id INT,
  date DATE NOT NULL,
  due_date DATE NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  status ENUM('Pendiente', 'Pagada', 'Rechazada', 'En Revisión') NOT NULL DEFAULT 'Pendiente',
  notes TEXT,
  file_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (shipment_id) REFERENCES shipments(id) ON DELETE SET NULL,
  FOREIGN KEY (carrier_id) REFERENCES carriers(id) ON DELETE SET NULL,
  FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE SET NULL
);

-- Tabla de documentos de compliance
CREATE TABLE compliance_documents (
  id INT AUTO_INCREMENT PRIMARY KEY,
  document_code VARCHAR(20) NOT NULL UNIQUE,
  carrier_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  document_type VARCHAR(50) NOT NULL,
  expiration_date DATE NOT NULL,
  status ENUM('Vigente', 'Por Vencer', 'Vencido', 'En Revisión') NOT NULL DEFAULT 'Vigente',
  upload_date DATE NOT NULL,
  file_url VARCHAR(255),
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (carrier_id) REFERENCES carriers(id) ON DELETE CASCADE
);

-- Tabla de noticias
CREATE TABLE news (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  summary TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url VARCHAR(255),
  status ENUM('Publicada', 'Borrador', 'Archivada') NOT NULL DEFAULT 'Borrador',
  created_by INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
);

-- Insertar datos de ejemplo para usuarios
INSERT INTO users (email, password, name, role) VALUES
('admin@nearestgroup.com', '$2a$10$XDCJfGmNMnP6vLcz2ZEKAOqKuBJwUl.vFJZYFZOKNUOSUBnGniYOO', 'Administrador', 'admin'),
('demo@nearestgroup.com', '$2a$10$XDCJfGmNMnP6vLcz2ZEKAOqKuBJwUl.vFJZYFZOKNUOSUBnGniYOO', 'Cliente Demo', 'client'),
('carrier@example.com', '$2a$10$XDCJfGmNMnP6vLcz2ZEKAOqKuBJwUl.vFJZYFZOKNUOSUBnGniYOO', 'Transportista Demo', 'carrier');
