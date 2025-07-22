# Manual de Implementación - Nearest Group

## Descripción del Proyecto

Nearest Group es una plataforma web integral para servicios de logística y transporte que incluye:

- Sitio web corporativo con información de servicios
- Portal de clientes para gestión de envíos
- Panel administrativo para gestión interna
- Portal de transportistas para colaboradores

## Arquitectura Técnica

### Stack Tecnológico

- **Frontend**: Next.js 14 con App Router
- **Styling**: Tailwind CSS + shadcn/ui
- **Base de Datos**: MySQL
- **Autenticación**: NextAuth.js
- **Deployment**: Vercel
- **Email**: Nodemailer

### Estructura del Proyecto

~~~
app/
├── (public)/              # Rutas públicas
│   ├── page.tsx           # Página principal
│   ├── services/          # Páginas de servicios
│   └── industries/        # Páginas de industrias
├── portal/                # Portal de clientes
│   └── dashboard/         # Dashboard del cliente
├── admin/                 # Panel administrativo
│   ├── clients/           # Gestión de clientes
│   ├── contracts/         # Gestión de contratos
│   ├── news/              # Gestión de noticias
│   ├── reports/           # Reportes
│   ├── requests/          # Solicitudes
│   └── shipments/         # Envíos
├── carrier/               # Portal de transportistas
│   ├── compliance/        # Cumplimiento
│   ├── invoices/          # Facturas
│   └── updates/           # Actualizaciones
├── components/            # Componentes compartidos
└── api/                   # API routes
~~~

## Configuración del Entorno

### Variables de Entorno Requeridas

~~~env
# Base de datos
DATABASE_URL="mysql://usuario:password@host:puerto/database"

# Autenticación
NEXTAUTH_URL="https://tu-dominio.com"
NEXTAUTH_SECRET="tu-secret-key-aqui"

# Email
EMAIL_SERVER="smtp.tu-proveedor.com"
EMAIL_PORT="587"
EMAIL_SECURE="false"
EMAIL_USER="tu-email@dominio.com"
EMAIL_PASSWORD="tu-password"

# Blob Storage (Vercel)
BLOB_READ_WRITE_TOKEN="tu-blob-token"
~~~

### Instalación Local

1. Clonar el repositorio:
~~~bash
git clone https://github.com/tu-usuario/nearest-group.git
cd nearest-group
~~~

2. Instalar dependencias:
~~~bash
npm install
~~~

3. Configurar variables de entorno:
~~~bash
cp .env.example .env.local
# Editar .env.local con tus valores
~~~

4. Ejecutar en desarrollo:
~~~bash
npm run dev
~~~

## Base de Datos

### Esquema Principal

#### Tabla: users
~~~sql
CREATE TABLE users (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  role ENUM('admin', 'client', 'carrier') NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
~~~

#### Tabla: clients
~~~sql
CREATE TABLE clients (
  id VARCHAR(255) PRIMARY KEY,
  user_id VARCHAR(255),
  company_name VARCHAR(255) NOT NULL,
  contact_person VARCHAR(255),
  phone VARCHAR(50),
  address TEXT,
  status ENUM('active', 'inactive') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
~~~

#### Tabla: shipments
~~~sql
CREATE TABLE shipments (
  id VARCHAR(255) PRIMARY KEY,
  client_id VARCHAR(255),
  tracking_number VARCHAR(100) UNIQUE NOT NULL,
  origin VARCHAR(255) NOT NULL,
  destination VARCHAR(255) NOT NULL,
  service_type ENUM('terrestrial', 'air', 'maritime', 'storage') NOT NULL,
  status ENUM('pending', 'in_transit', 'delivered', 'cancelled') DEFAULT 'pending',
  weight DECIMAL(10,2),
  dimensions VARCHAR(100),
  estimated_delivery DATE,
  actual_delivery DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (client_id) REFERENCES clients(id)
);
~~~

#### Tabla: contracts
~~~sql
CREATE TABLE contracts (
  id VARCHAR(255) PRIMARY KEY,
  client_id VARCHAR(255),
  provider VARCHAR(255),
  service_type ENUM('terrestrial', 'air', 'maritime', 'storage') NOT NULL,
  route VARCHAR(255),
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  value DECIMAL(15,2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'MXN',
  status ENUM('active', 'pending', 'expired', 'cancelled') DEFAULT 'pending',
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (client_id) REFERENCES clients(id)
);
~~~

#### Tabla: news
~~~sql
CREATE TABLE news (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  summary TEXT NOT NULL,
  content TEXT,
  image_url VARCHAR(500),
  status ENUM('published', 'draft') DEFAULT 'draft',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
~~~

## Funcionalidades Principales

### 1. Sitio Web Público

- **Página Principal**: Hero section, servicios, capacidades, clientes
- **Servicios**: Terrestre, Aéreo, Marítimo, Almacenamiento
- **Industrias**: Automotriz, Electrónica, Textil, Alimentos, Salud
- **Formulario de Contacto**: Integrado con email
- **Seguimiento de Envíos**: Consulta pública por número de tracking
- **Noticias**: Blog corporativo
- **Multiidioma**: Español/Inglés

### 2. Portal de Clientes

- **Dashboard**: Resumen de envíos y métricas
- **Gestión de Envíos**: Ver, crear, rastrear envíos
- **Documentos**: Acceso a documentación de envíos
- **Solicitudes**: Crear nuevas solicitudes de servicio
- **Métricas**: Estadísticas de uso y rendimiento
- **Perfil**: Gestión de cuenta y configuración

### 3. Panel Administrativo

- **Dashboard**: Métricas generales del negocio
- **Gestión de Clientes**: CRUD completo de clientes
- **Gestión de Contratos**: Administración de contratos
- **Gestión de Envíos**: Supervisión de todos los envíos
- **Gestión de Noticias**: CMS para el blog corporativo
- **Solicitudes**: Revisión y aprobación de solicitudes
- **Reportes**: Generación de reportes de negocio

### 4. Portal de Transportistas

- **Dashboard**: Información relevante para carriers
- **Actualizaciones**: Comunicaciones y avisos
- **Facturas**: Gestión de facturación
- **Cumplimiento**: Documentación y certificaciones

## Deployment en Vercel

### Configuración Automática

1. Conectar repositorio de GitHub a Vercel
2. Configurar variables de entorno en el dashboard de Vercel
3. El deployment se ejecuta automáticamente en cada push

### Variables de Entorno en Vercel

Configurar en el dashboard de Vercel:
- Ir a Settings > Environment Variables
- Agregar todas las variables listadas anteriormente
- Asegurar que estén disponibles para Production, Preview y Development

### Configuración de Base de Datos

Para producción, se recomienda usar:
- **PlanetScale** (MySQL serverless)
- **Neon** (PostgreSQL serverless)
- **Supabase** (PostgreSQL con funcionalidades adicionales)

## Configuración de Email

### Proveedores Recomendados

1. **SendGrid**
2. **Mailgun**
3. **Amazon SES**
4. **Gmail SMTP** (para desarrollo)

### Configuración con Gmail

~~~env
EMAIL_SERVER="smtp.gmail.com"
EMAIL_PORT="587"
EMAIL_SECURE="false"
EMAIL_USER="tu-email@gmail.com"
EMAIL_PASSWORD="tu-app-password"
~~~

## Seguridad

### Medidas Implementadas

1. **Autenticación**: NextAuth.js con múltiples proveedores
2. **Autorización**: Middleware para proteger rutas
3. **Validación**: Validación de datos en cliente y servidor
4. **HTTPS**: Forzado en producción
5. **Variables de Entorno**: Secrets protegidos

### Roles y Permisos

- **Admin**: Acceso completo a todas las funcionalidades
- **Client**: Acceso limitado a su información y envíos
- **Carrier**: Acceso a información relevante para transportistas

## Mantenimiento

### Tareas Regulares

1. **Backup de Base de Datos**: Diario
2. **Monitoreo de Logs**: Revisión semanal
3. **Actualizaciones de Dependencias**: Mensual
4. **Revisión de Seguridad**: Trimestral

### Monitoreo

- **Vercel Analytics**: Métricas de rendimiento
- **Error Tracking**: Sentry o similar
- **Uptime Monitoring**: Pingdom o similar

## Soporte y Documentación

### Contacto Técnico

- **Email**: soporte@nearestgroup.com
- **Documentación**: Disponible en el repositorio
- **Issues**: GitHub Issues para reportar problemas

### Recursos Adicionales

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentación de shadcn/ui](https://ui.shadcn.com)
- [Documentación de Vercel](https://vercel.com/docs)

## Changelog

### v1.0.0 (Enero 2025)
- Lanzamiento inicial
- Sitio web público completo
- Portal de clientes básico
- Panel administrativo
- Portal de transportistas
- Sistema de autenticación
- Integración de email
- Deployment en Vercel

---

**Última actualización**: Enero 2025
**Versión**: 1.0.0
**Mantenido por**: Equipo de Desarrollo Nearest Group
