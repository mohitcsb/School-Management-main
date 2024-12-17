package com.mohit.SMS.With.Maven.repository;

import com.mohit.SMS.With.Maven.model.ClassModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassRepo extends JpaRepository<ClassModel,Long > {


}
