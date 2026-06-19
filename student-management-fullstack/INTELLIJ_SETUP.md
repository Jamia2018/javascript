# IntelliJ IDEA Setup Guide

Use this guide if you want to open, run, debug, and understand the project in IntelliJ IDEA.

## 1. Open the project

1. Open IntelliJ IDEA.
2. Click **File > Open**.
3. Select this folder: `student-management-fullstack/backend`.
4. Choose **Open as Project**.
5. Wait for Maven indexing to finish. IntelliJ will download Spring Boot dependencies.

> If Maven download fails, check your internet/proxy settings in **Settings > Build, Execution, Deployment > Build Tools > Maven**.

## 2. Select the correct JDK

1. Go to **File > Project Structure > Project**.
2. Set **SDK** to **Java 17** or newer.
3. Set **Language level** to **17**.

## 3. Start MySQL for local development

From the `student-management-fullstack` folder, run:

```bash
docker compose up -d mysql
```

This starts MySQL with the values already configured in `backend/src/main/resources/application.properties`.

## 4. Run the Spring Boot app

In IntelliJ:

1. Open `src/main/java/com/example/studentapp/StudentManagementApplication.java`.
2. Click the green run icon near the `main` method.
3. Choose **Run 'StudentManagementApplication'**.

The app starts at:

```text
http://localhost:8080
```

Because the frontend is also copied into Spring Boot static resources, opening `http://localhost:8080` shows the Student Management UI.

## 5. Debug the app

1. Add a breakpoint in `StudentController` or `StudentService`.
2. Click the bug icon to start **Debug**.
3. Use the frontend in the browser.
4. IntelliJ will pause when your API endpoint is called.

## 6. Recommended files to read first

1. `model/Student.java` - database table mapping and validation.
2. `repository/StudentRepository.java` - database operations.
3. `service/StudentService.java` - business logic.
4. `controller/StudentController.java` - REST API endpoints.
5. `src/main/resources/static/app.js` - browser calls to backend APIs.

## 7. Common IntelliJ problems

### Maven dependencies are red

Open the Maven tool window and click **Reload All Maven Projects**.

### Java version error

Install JDK 17 and set it in **Project Structure**.

### Database connection refused

Run `docker compose up -d mysql` from the `student-management-fullstack` folder and verify Docker Desktop is running.

### Port 8080 already in use

Stop the other app or change `server.port` in `backend/src/main/resources/application.properties`.
