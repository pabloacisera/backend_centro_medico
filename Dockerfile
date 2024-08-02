# Usa una imagen base de Node.js
FROM node:21

# Configura el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos de configuración de npm
COPY backend/package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente del backend
COPY backend/src ./src

# Copia los archivos de configuración de TypeScript
COPY backend/tsconfig*.json ./

# Expon el puerto en el que la aplicación escuchará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]

