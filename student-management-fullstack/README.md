# Student Management Full Stack Project (Beginner Friendly)

This is an absolute beginner Java full stack project for freshers who want to understand how a real application is organized with **Spring Boot**, **MySQL**, and a simple **HTML/CSS/JavaScript** frontend.

## What you will learn

- How a frontend sends HTTP requests to a backend REST API.
- How Spring Boot exposes CRUD endpoints.
- How Spring Data JPA stores Java objects in MySQL tables.
- How to keep business logic in a service layer.
- How to validate user input before saving data.
- How to run the project in IntelliJ IDEA.
- How to package and deploy the app as one Spring Boot JAR.

## Tech stack

| Layer | Technology | Why it is used |
| --- | --- | --- |
| Frontend | HTML, CSS, JavaScript | Simple UI for learning API calls without a framework. |
| Backend | Java 17, Spring Boot 3 | Popular Java backend framework used in companies. |
| API | REST + JSON | Common way frontend and backend communicate. |
| Database | MySQL 8 | Stores student records permanently. |
| ORM | Spring Data JPA / Hibernate | Maps Java classes to database tables. |
| Migration | Flyway | Creates database tables during app startup. |
| Build Tool | Maven | Downloads dependencies and runs the app/tests. |
| Dev Tooling | Docker Compose | Starts MySQL locally with one command. |

## Project structure

```text
student-management-fullstack/
├── backend/                 # Spring Boot REST API and deployable frontend
│   ├── src/main/java/com/example/studentapp
│   │   ├── config/          # CORS setup for frontend access
│   │   ├── controller/      # HTTP endpoints
│   │   ├── exception/       # Friendly error handling
│   │   ├── model/           # JPA entity classes
│   │   ├── repository/      # Database access interfaces
│   │   └── service/         # Business logic
│   └── src/main/resources
│       ├── db/migration/    # Flyway database scripts
│       └── static/          # Frontend served by Spring Boot
├── frontend/                # Standalone copy of the beginner UI
├── INTELLIJ_SETUP.md        # Step-by-step IntelliJ setup
├── DEPLOYMENT.md            # Deployment checklist and commands
├── database/schema.sql      # MySQL table creation script
└── docker-compose.yml       # Local MySQL/app containers
```

## Features

- Add a student.
- View all students.
- Edit student details.
- Delete a student.
- Validate name, email, course, and age.
- Run the UI from `http://localhost:8080` after the backend starts.

## Prerequisites

Install these tools first:

1. Java 17 or newer
2. Maven 3.9+
3. Docker Desktop (or local MySQL 8)
4. IntelliJ IDEA Community or Ultimate
5. A browser

## Run the project in IntelliJ IDEA

Read the full setup guide here:

```text
INTELLIJ_SETUP.md
```

Quick steps:

1. Open `student-management-fullstack/backend` in IntelliJ.
2. Set the project SDK to Java 17.
3. Start MySQL from the project root:

```bash
docker compose up -d mysql
```

4. Run `StudentManagementApplication` from IntelliJ.
5. Open `http://localhost:8080` in your browser.

## Run the project from terminal

### 1. Start MySQL

From this folder, run:

```bash
docker compose up -d mysql
```

This starts MySQL on port `3306` with:

- Database: `student_db`
- Username: `student_user`
- Password: `student_password`

### 2. Start the Spring Boot backend

```bash
cd backend
mvn spring-boot:run
```

The application starts at `http://localhost:8080` and serves both the backend API and frontend page.

## Deploy the project

Read the deployment guide here:

```text
DEPLOYMENT.md
```

Quick production build:

```bash
cd backend
mvn clean package -DskipTests
SPRING_PROFILES_ACTIVE=prod java -jar target/student-management-backend-0.0.1-SNAPSHOT.jar
```

## REST API endpoints

| Method | URL | Description |
| --- | --- | --- |
| GET | `/api/students` | Get all students. |
| GET | `/api/students/{id}` | Get one student. |
| POST | `/api/students` | Create a student. |
| PUT | `/api/students/{id}` | Update a student. |
| DELETE | `/api/students/{id}` | Delete a student. |

## Example JSON for creating a student

```json
{
  "name": "Asha Kumar",
  "email": "asha@example.com",
  "course": "Java Full Stack",
  "age": 22
}
```

## Fresher learning path

1. Start with `model/Student.java` to understand how a Java class becomes a table.
2. Read `repository/StudentRepository.java` to see how Spring creates database queries.
3. Read `service/StudentService.java` to understand business logic.
4. Read `controller/StudentController.java` to understand REST endpoints.
5. Open `src/main/resources/static/app.js` to see how `fetch()` calls the backend.
6. Read `INTELLIJ_SETUP.md` and run the project in debug mode.
7. Read `DEPLOYMENT.md` and build the production JAR.

## Common interview explanation

> I built a simple Student Management System using Spring Boot, MySQL, JPA, Flyway, and a JavaScript frontend. The Spring Boot app serves the frontend and REST APIs from one deployable JAR. The controller receives requests, the service handles business logic, the repository talks to MySQL, and JPA maps the Student entity to the `students` table.

## Note about the database script

`database/schema.sql` is included for learning and for manual MySQL setup. During normal app startup, Flyway uses `backend/src/main/resources/db/migration/V1__create_students_table.sql` to create the table automatically.
