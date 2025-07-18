# Manual de Implementación · Nearest Group

Este documento explica cómo instalar y desplegar la aplicación **Nearest Group** en entornos de desarrollo local y producción.

---

## Requisitos

- Node.js ≥ 18  
- npm o yarn  
- MySQL ≥ 8  
- Git  
- (Producción) Servidor Linux con acceso SSH  
- (Opcional) Nginx + PM2 para orquestar el proceso

---

## 1. Instalación en Localhost

### 1.1 Clonar el repositorio

\`\`\`bash
git clone https://github.com/tu-usuario/nearest-group.git
cd nearest-group
\`\`\`

### 1.2 Instalar dependencias

\`\`\`bash
# con npm
npm install

# o con yarn
yarn
\`\`\`

### 1.3 Configurar la base de datos

1. Crear la BBDD:

 \`\`\`bash
 mysql -u root -p -e "CREATE DATABASE nearest_group CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
 \`\`\`

2. Importar el esquema:

 \`\`\`bash
 mysql -u root -p nearest_group < database-schema.sql
 \`\`\`

### 1.4 Crear el archivo `.env`

\`\`\`env
# Database
DATABASE_URL="mysql://root:tu-password@localhost:3306/nearest_group"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_NAME="Nearest Group"

# Auth
JWT_SECRET="cambia-esto-por-algo-seguro"
JWT_EXPIRES_IN="7d"

# SMTP
EMAIL_SERVER="smtp.example.com"
EMAIL_PORT="587"
EMAIL_SECURE="false"
EMAIL_USER="user@example.com"
EMAIL_PASSWORD="tu-password-smtp"
EMAIL_FROM="noreply@nearestgroup.com"
\`\`\`

### 1.5 Levantar el entorno

\`\`\`bash
npm run dev           # o yarn dev
\`\`\`

La web estará disponible en `http://localhost:3000`.

---

## 2. Despliegue en Producción

### 2.1 Preparar el servidor

\`\`\`bash
# Debian/Ubuntu
sudo apt update && sudo apt install -y git mysql-server nginx
\`\`\`

Instala **Node.js 18** (por ej. con `nvm`) y **PM2**:

\`\`\`bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
npm i -g pm2
\`\`\`

### 2.2 Clonar el proyecto

\`\`\`bash
git clone https://github.com/tu-usuario/nearest-group.git /var/www/nearest-group
cd /var/www/nearest-group
\`\`\`

### 2.3 Instalar dependencias

\`\`\`bash
npm ci --production    # o yarn --production
\`\`\`

### 2.4 Configurar la base de datos

Crea la BBDD e importa el esquema igual que en local (ajustando credenciales de producción).

### 2.5 Variables de entorno

Copia `.env.example` (si existe) o crea `.env` con valores reales (ver sección 1.4), cambiando:

\`\`\`env
NEXT_PUBLIC_APP_URL="https://tu-dominio.com"
\`\`\`

### 2.6 Compilar y ejecutar con PM2

\`\`\`bash
npm run build          # o yarn build
pm2 start npm --name "nearest-group" -- start
pm2 save
\`\`\`

### 2.7 Configurar Nginx como proxy inverso

1. Crear el archivo `/etc/nginx/sites-available/nearest-group`:

 \`\`\`nginx
 server {
   listen 80;
   server_name tu-dominio.com www.tu-dominio.com;

   location / {
     proxy_pass         http://127.0.0.1:3000;
     proxy_http_version 1.1;
     proxy_set_header   Upgrade $http_upgrade;
     proxy_set_header   Connection "upgrade";
     proxy_set_header   Host $host;
     proxy_cache_bypass $http_upgrade;
   }
 }
 \`\`\`

2. Activar y reiniciar:

 \`\`\`bash
 sudo ln -s /etc/nginx/sites-available/nearest-group /etc/nginx/sites-enabled/
 sudo nginx -t && sudo systemctl restart nginx
 \`\`\`

3. (Opcional) Añadir HTTPS con **Let’s Encrypt**:

 \`\`\`bash
 sudo apt install certbot python3-certbot-nginx
 sudo certbot --nginx -d tu-dominio.com -d www.tu-dominio.com
 \`\`\`

---

## 3. Mantenimiento

- `pm2 ls` / `pm2 logs` – supervisar procesos  
- `git pull && npm ci --production && npm run build && pm2 restart nearest-group` – actualizar la app  
- Copias de seguridad de la BBDD recomendadas (por ej. `mysqldump`)  

---

## Preguntas Frecuentes

**¿Cómo cambio el puerto por defecto?**  
Edita el script de inicio en `package.json` o exporta `PORT=#`.

**¿Puedo usar otra BBDD?**  
Sí. Asegúrate de actualizar `DATABASE_URL` y los scripts SQL correspondientes.

**¿Qué hago si PM2 no arranca al reiniciar?**  
Ejecuta `pm2 startup` y luego `pm2 save` para generar el servicio de sistema.

---

¡Listo! Tu instancia de **Nearest Group** debería estar operativa tanto en desarrollo como en producción.
