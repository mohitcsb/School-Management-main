package com.mohit.SMS.With.Maven.service;

import com.mohit.SMS.With.Maven.model.StuAttendanceModel;
import com.mohit.SMS.With.Maven.repository.StuAttendanceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StuAttendanceService {

    @Autowired
    StuAttendanceRepo stuAttendanceRepo;

//    public List<StuAttendanceModel> getAttendanceByClasss(String a_class){
//        return stuAttendanceRepo.findByA_Class(a_class);
//    }

    public List<StuAttendanceModel> getAll(){
        return stuAttendanceRepo.findAll();
    }


    public StuAttendanceModel saveAttendance(StuAttendanceModel att){
        return stuAttendanceRepo.save(att);
    }


    public void deleteAttendance(long id){
        stuAttendanceRepo.deleteById(id);
    }

    public void getById(long aid){
      stuAttendanceRepo.findById(aid);
    }




}
