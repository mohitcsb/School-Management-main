package com.mohit.SMS.With.Maven.repository;

import com.mohit.SMS.With.Maven.model.StuAttendanceModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StuAttendanceRepo extends JpaRepository<StuAttendanceModel,Long> {

    List<StuAttendanceModel> findByAid(long aid);


}
