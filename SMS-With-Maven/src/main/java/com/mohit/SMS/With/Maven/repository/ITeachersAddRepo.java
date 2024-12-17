package com.mohit.SMS.With.Maven.repository;

import com.mohit.SMS.With.Maven.model.TeacherAddModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITeachersAddRepo extends JpaRepository<TeacherAddModel, Integer> {

    TeacherAddModel findByTid(int tid);

    long count();
}
