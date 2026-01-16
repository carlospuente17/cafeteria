# Stage 1: Build
FROM maven:3.8.1-openjdk-17 AS builder

WORKDIR /app

# Copiar pom.xml y descargar dependencias
COPY pom.xml .
RUN mvn dependency:go-offline

# Copiar código fuente
COPY src/ src/

# Compilar
RUN mvn clean package -DskipTests

# Stage 2: Runtime
FROM openjdk:17-slim

WORKDIR /app

# Copiar JAR del stage anterior
COPY --from=builder /app/target/cafeteria-backend-1.0.0.jar app.jar

# Exponer puerto
EXPOSE 8080

# Variables de entorno por defecto
ENV SPRING_PROFILES_ACTIVE=prod
ENV PORT=8080

# Ejecutar
CMD ["java", "-jar", "app.jar"]
