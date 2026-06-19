package com.example.studentapp.service;

import java.util.List;

import com.example.studentapp.exception.StudentNotFoundException;
import com.example.studentapp.model.Student;
import com.example.studentapp.repository.StudentRepository;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student getStudentById(Long id) {
        return studentRepository.findById(id).orElseThrow(() -> new StudentNotFoundException(id));
    }

    public Student createStudent(Student student) {
        if (studentRepository.existsByEmail(student.getEmail())) {
            throw new IllegalArgumentException("Email already exists");
        }
        return studentRepository.save(student);
    }

    public Student updateStudent(Long id, Student updatedStudent) {
        Student existingStudent = getStudentById(id);

        if (studentRepository.existsByEmailAndIdNot(updatedStudent.getEmail(), id)) {
            throw new IllegalArgumentException("Email already exists");
        }

        existingStudent.setName(updatedStudent.getName());
        existingStudent.setEmail(updatedStudent.getEmail());
        existingStudent.setCourse(updatedStudent.getCourse());
        existingStudent.setAge(updatedStudent.getAge());

        return studentRepository.save(existingStudent);
    }

    public void deleteStudent(Long id) {
        Student student = getStudentById(id);
        studentRepository.delete(student);
    }
}
