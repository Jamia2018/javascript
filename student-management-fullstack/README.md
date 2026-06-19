# Student Management Full Stack Project (Beginner Friendly)

This is an absolute beginner Java full stack project for freshers who want to understand how a real application is organized with **Spring Boot**, **MySQL**, and a simple **HTML/CSS/JavaScript** frontend.

## What you will learn

- How a frontend sends HTTP requests to a backend REST API.
- How Spring Boot exposes CRUD endpoints.
- How Spring Data JPA stores Java objects in MySQL tables.
- How to keep business logic in a service layer.
- How to validate user input before saving data.
- How environment variables keep database credentials out of code.

## Tech stack

| Layer | Technology | Why it is used |
| --- | --- | --- |
| Frontend | HTML, CSS, JavaScript | Simple UI for learning API calls without a framework. |
| Backend | Java 17, Spring Boot 3 | Popular Java backend framework used in companies. |
| API | REST + JSON | Common way frontend and backend communicate. |
| Database | MySQL 8 | Stores student records permanently. |
| ORM | Spring Data JPA / Hibernate | Maps Java classes to database tables. |
| Build Tool | Maven | Downloads dependencies and runs the app/tests. |
| Dev Tooling | Docker Compose | Starts MySQL locally with one command. |

## Project structure

```text
student-management-fullstack/
├── backend/                 # Spring Boot REST API
│   ├── src/main/java/com/example/studentapp
│   │   ├── config/          # CORS setup for frontend access
│   │   ├── controller/      # HTTP endpoints
│   │   ├── exception/       # Friendly error handling
│   │   ├── model/           # JPA entity classes
│   │   ├── repository/      # Database access interfaces
│   │   └── service/         # Business logic
│   └── src/main/resources/application.properties
├── database/schema.sql      # MySQL table creation script
├── docker-compose.yml       # Local MySQL container
└── frontend/                # Beginner UI
```

## Features

- Add a student.
- View all students.
- Edit student details.
- Delete a student.
- Validate name, email, course, and age.

## Prerequisites

Install these tools first:

1. Java 17 or newer
2. Maven 3.9+
3. Docker Desktop (or local MySQL 8)
4. A browser

## Run the project

### 1. Start MySQL

From this folder, run:

```bash
docker compose up -d
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

The API starts at `http://localhost:8080`.

### 3. Open the frontend

Open this file in your browser:

```text
frontend/index.html
```

Then add, update, and delete students from the page.

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
5. Open `frontend/app.js` to see how `fetch()` calls the backend.
6. Change one field, run the app again, and observe the full flow.

## Common interview explanation

> I built a simple Student Management System using Spring Boot, MySQL, JPA, and a JavaScript frontend. The frontend calls REST APIs with JSON. The controller receives requests, the service handles business logic, the repository talks to MySQL, and JPA maps the Student entity to the `students` table.
