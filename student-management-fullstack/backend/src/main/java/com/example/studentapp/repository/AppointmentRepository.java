package com.example.studentapp.repository;

import java.util.List;

import com.example.studentapp.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    List<Appointment> findByPhoneOrderByCreatedAtDesc(String phone);
}
