# Kohinoor Emergency Neuro & Cardio Hospital Website

Production-ready full-stack starter for **Kohinoor Emergency Neuro & Cardio Hospital**, Near Kundipul, N.H.31, Line Bazar, Purnea, Bihar. Director: **Mr Salman Khurshid**.

## Project overview

- **Purpose and goals:** present trusted hospital information, make emergency phone numbers instantly accessible, describe facilities, and collect appointment/admission requests.
- **Target users:** patients, attendants, ambulance coordinators, OPD visitors, and referring clinicians.
- **Core features:** responsive landing page, services, doctors, contact CTAs, validated appointment form, Spring Boot REST API, MySQL schema, Docker Compose, SEO metadata, and accessibility-friendly markup.

## UI/UX design

- Mobile-first responsive layout with sticky navigation and a prominent 24/7 emergency CTA.
- Professional healthcare palette: teal for trust, red for emergency actions, gold accents, white cards, high-contrast text.
- Typography uses Inter with large headings, readable body text, visible labels, and accessible focus states.
- Page layouts: hero/emergency panel, overview cards, facility grid, doctor grid, appointment split layout, documentation cards, and contact/map CTA.

## Tech stack

| Layer | Technology |
| --- | --- |
| Frontend | HTML5, CSS3, vanilla JavaScript |
| Backend | Java 17, Spring Boot 3, REST JSON |
| Database | MySQL 8 with indexed appointment table |
| DevOps | Docker Compose; deploy frontend to Netlify/Vercel and backend to AWS/Azure/GCP |

## Folder structure

```text
student-management-fullstack/
├── backend/                 # Spring Boot REST API
│   └── src/main/java/com/example/studentapp
│       ├── config/          # CORS setup
│       ├── controller/      # /api/appointments endpoints
│       ├── exception/       # Error handling
│       ├── model/           # JPA entities
│       ├── repository/      # Spring Data repositories
│       └── service/         # Business logic
├── database/schema.sql      # MySQL schema and sample data
├── docker-compose.yml       # Local MySQL
└── frontend/                # Responsive hospital website
```

## Run locally

### 1. Start MySQL

```bash
docker compose up -d
```

Database defaults:

- Database: `hospital_db`
- Username: `hospital_user`
- Password: `hospital_password`

### 2. Start the Spring Boot backend

```bash
cd backend
mvn spring-boot:run
```

API starts at `http://localhost:8080`.

### 3. Open the frontend

Open `frontend/index.html` in a browser. The appointment form posts to `http://localhost:8080/api/appointments`.

## REST API documentation

| Method | URL | Description |
| --- | --- | --- |
| GET | `/api/appointments` | List appointment requests. |
| POST | `/api/appointments` | Create a validated appointment request. |

Example appointment request:

```json
{
  "patientName": "Amit Kumar",
  "phone": "9334066155",
  "service": "Cardiology OPD",
  "preferredDate": "2026-06-24",
  "message": "Chest discomfort consultation request"
}
```

## Database design

- `appointments`: stores patient name, phone, service, preferred date, message, status, and created timestamp.
- Indexes: `phone` for lookup, `status` for workflow queues, `preferred_date` for scheduling.
- Future production tables: doctors, departments, users, roles, audit logs, uploaded reports, and chatbot conversations.

## Security, optimization, and accessibility

- Server-side validation protects the appointment API from malformed data.
- CORS is configurable through `app.cors.allowed-origin`.
- Environment variables should override database credentials in production.
- SEO metadata, semantic landmarks, skip link, form labels, focus rings, and high-contrast CTAs improve discoverability and WCAG alignment.
- Future auth: admin JWT/session login with role-based access for appointment management.

## AI roadmap

- Safe triage chatbot for FAQs and routing only, with emergency disclaimers.
- Multilingual assistance for Hindi/Urdu/English.
- Appointment prioritization and call-center summaries reviewed by hospital staff.
