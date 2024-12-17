package com.mohit.SMS.With.Maven.repository;

import com.mohit.SMS.With.Maven.model.SubjectModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubjectRepo extends JpaRepository<SubjectModel,Long> {


    SubjectModel findBySubName(String subName);



}
