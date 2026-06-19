const API_URL = 'http://localhost:8080/api/students';

const form = document.querySelector('#student-form');
const tableBody = document.querySelector('#students-table');
const message = document.querySelector('#message');
const formTitle = document.querySelector('#form-title');
const resetButton = document.querySelector('#reset-button');
const refreshButton = document.querySelector('#refresh-button');

function getFormData() {
  return {
    name: document.querySelector('#name').value.trim(),
    email: document.querySelector('#email').value.trim(),
    course: document.querySelector('#course').value.trim(),
    age: Number(document.querySelector('#age').value)
  };
}

function fillForm(student) {
  document.querySelector('#student-id').value = student.id;
  document.querySelector('#name').value = student.name;
  document.querySelector('#email').value = student.email;
  document.querySelector('#course').value = student.course;
  document.querySelector('#age').value = student.age;
  formTitle.textContent = `Edit Student #${student.id}`;
}

function resetForm() {
  form.reset();
  document.querySelector('#student-id').value = '';
  formTitle.textContent = 'Add Student';
  message.textContent = '';
}

async function loadStudents() {
  const response = await fetch(API_URL);
  const students = await response.json();

  tableBody.innerHTML = students.map(student => `
    <tr>
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.email}</td>
      <td>${student.course}</td>
      <td>${student.age}</td>
      <td>
        <button type="button" onclick='editStudent(${JSON.stringify(student)})'>Edit</button>
        <button type="button" class="secondary" onclick="deleteStudent(${student.id})">Delete</button>
      </td>
    </tr>
  `).join('');
}

async function saveStudent(event) {
  event.preventDefault();

  const studentId = document.querySelector('#student-id').value;
  const isEditing = Boolean(studentId);
  const url = isEditing ? `${API_URL}/${studentId}` : API_URL;
  const method = isEditing ? 'PUT' : 'POST';

  const response = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(getFormData())
  });

  if (!response.ok) {
    const error = await response.json();
    message.textContent = error.message || Object.values(error).join(', ');
    return;
  }

  message.textContent = isEditing ? 'Student updated successfully.' : 'Student added successfully.';
  resetForm();
  await loadStudents();
}

async function deleteStudent(id) {
  const confirmed = window.confirm('Delete this student?');
  if (!confirmed) {
    return;
  }

  const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  if (response.ok) {
    message.textContent = 'Student deleted successfully.';
    await loadStudents();
  }
}

function editStudent(student) {
  fillForm(student);
}

form.addEventListener('submit', saveStudent);
resetButton.addEventListener('click', resetForm);
refreshButton.addEventListener('click', loadStudents);

loadStudents().catch(() => {
  message.textContent = 'Could not connect to backend. Start Spring Boot first.';
});
