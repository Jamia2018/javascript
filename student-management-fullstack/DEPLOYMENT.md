# Deployment Guide

This project can be deployed as one Spring Boot application. The backend serves the REST API and also serves the frontend from `src/main/resources/static`, so you only need to deploy one Java app.

## Build a production JAR

From `student-management-fullstack/backend`, run:

```bash
mvn clean package -DskipTests
```

The JAR will be created at:

```text
backend/target/student-management-backend-0.0.1-SNAPSHOT.jar
```

Run it locally with the production profile:

```bash
SPRING_PROFILES_ACTIVE=prod java -jar target/student-management-backend-0.0.1-SNAPSHOT.jar
```

## Required production environment variables

Set these in your hosting platform:

| Variable | Example | Purpose |
| --- | --- | --- |
| `SPRING_PROFILES_ACTIVE` | `prod` | Uses production settings. |
| `DB_URL` | `jdbc:mysql://host:3306/student_db?useSSL=true&serverTimezone=UTC` | MySQL JDBC connection URL. |
| `DB_USERNAME` | `student_user` | Database username. |
| `DB_PASSWORD` | `strong_password` | Database password. |
| `FRONTEND_ORIGIN` | `https://your-domain.com` | Allowed browser origin for CORS. |

## Deploy with Docker

From `student-management-fullstack`, build and run both app and MySQL locally:

```bash
docker compose up --build
```

Open:

```text
http://localhost:8080
```

## Deploy to a cloud provider

Use these settings on Render, Railway, Fly.io, AWS Elastic Beanstalk, Azure App Service, or similar Java hosting:

- Runtime: Java 17
- Build command: `cd backend && mvn clean package -DskipTests`
- Start command: `cd backend && SPRING_PROFILES_ACTIVE=prod java -jar target/student-management-backend-0.0.1-SNAPSHOT.jar`
- Port: `8080`
- Database: MySQL 8

## Database migration

Flyway runs `backend/src/main/resources/db/migration/V1__create_students_table.sql` automatically when the app starts. This creates the `students` table if it does not already exist.

## Beginner deployment checklist

- [ ] The app runs in IntelliJ at `http://localhost:8080`.
- [ ] MySQL is running locally or in the cloud.
- [ ] `DB_URL`, `DB_USERNAME`, and `DB_PASSWORD` are set correctly.
- [ ] `SPRING_PROFILES_ACTIVE=prod` is set for deployment.
- [ ] The deployed app opens the frontend page.
- [ ] Add, edit, and delete student records from the browser.
