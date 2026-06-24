const API_URL = window.KOHINOOR_API_URL || '/api/appointments';

const services = [
  { icon: '🚑', title: '24/7 Emergency', text: 'Rapid response for urgent neuro, cardiac, trauma, and critical-care needs.' },
  { icon: '🫀', title: 'Cardiology OPD', text: 'Cardiology consultations, ECG, echo support, and monitored care.' },
  { icon: '🧠', title: 'Neuro Care', text: 'Neurology and neuropsychiatry consultations for emergency and OPD patients.' },
  { icon: '🏥', title: 'ICU, IPD & VIP Rooms', text: 'Inpatient admission, critical monitoring, ventilator support, and private rooms.' },
  { icon: '🩺', title: 'Operation Theatre', text: 'Prepared O.T support for procedures, burns, orthopaedic, and emergency care.' },
  { icon: '🔬', title: 'Diagnostics', text: 'Pathology, ultrasound, ECG, echo, and medicine services in one location.' }
];

const doctors = [
  ['Dr. J. Kumar', 'M.B.B.S. MD, DM', 'Cardiology'],
  ['Dr. Md. Ajaj Alam', 'M.B.B.S. MD', 'Neuro Physician'],
  ['Dr. Subodh Kumar', 'M.B.B.S. MD', 'General Physician'],
  ['Dr. Abdul Hannan', 'M.B.B.S. MD, NBMCH Darjeeling', 'Diabetes & Kidney Specialist'],
  ['Dr. Md. Nayab Anjum', 'M.B.B.S. MD, JNMCH (AMU), Aligarh', 'Neuropsychiatry'],
  ['Dr. Niharika Rani', 'M.B.B.S. MS', 'OBS & Gynae'],
  ['Dr. Naushad Alam', 'M.B.B.S. MS', 'Orthopaedics'],
  ['Dr. Shakeb Ahmad', 'M.B.B.S. MD', 'Pediatrics']
];

const serviceGrid = document.querySelector('#service-grid');
const doctorGrid = document.querySelector('#doctor-grid');
const serviceSelect = document.querySelector('#service');
const form = document.querySelector('#appointment-form');
const statusMessage = document.querySelector('#form-status');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('#nav-links');

function renderCards() {
  serviceGrid.innerHTML = services.map(service => `
    <article>
      <div class="service-icon" aria-hidden="true">${service.icon}</div>
      <h3>${service.title}</h3>
      <p>${service.text}</p>
    </article>
  `).join('');

  doctorGrid.innerHTML = doctors.map(([name, qualification, specialty]) => `
    <article>
      <h3>${name}</h3>
      <p>${qualification}</p>
      <p class="doctor-specialty">${specialty}</p>
    </article>
  `).join('');

  serviceSelect.insertAdjacentHTML('beforeend', services.map(service => `<option value="${service.title}">${service.title}</option>`).join(''));
}

function setStatus(text, isError = false) {
  statusMessage.textContent = text;
  statusMessage.style.color = isError ? '#b91c1c' : '#047857';
}

function getAppointmentPayload() {
  return {
    patientName: form.patientName.value.trim(),
    phone: form.phone.value.trim(),
    service: form.service.value,
    preferredDate: form.preferredDate.value,
    message: form.message.value.trim()
  };
}

async function submitAppointment(event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    setStatus('Please complete all required fields correctly.', true);
    return;
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(getAppointmentPayload())
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || Object.values(error).join(', '));
    }

    form.reset();
    setStatus('Appointment request submitted. The help desk will contact you soon.');
  } catch (error) {
    setStatus(`Saved locally for demo. Backend unavailable or rejected the request: ${error.message}`, true);
  }
}

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

form.addEventListener('submit', submitAppointment);
renderCards();
