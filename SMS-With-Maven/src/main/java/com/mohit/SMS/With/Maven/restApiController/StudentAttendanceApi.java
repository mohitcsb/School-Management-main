package com.mohit.SMS.With.Maven.restApiController;

import com.mohit.SMS.With.Maven.model.StuAttendanceModel;
import com.mohit.SMS.With.Maven.service.StuAttendanceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/attendance")
@CrossOrigin("*")
public class StudentAttendanceApi {
    public final StuAttendanceService stuAttendanceService;

    public StudentAttendanceApi(StuAttendanceService stuAttendanceService) {
        this.stuAttendanceService = stuAttendanceService;
    }

    @GetMapping("")
    public ResponseEntity<List<StuAttendanceModel>> studentAttendance() {
        return ResponseEntity.ok(stuAttendanceService.getAll());
    }

    @PostMapping("")
    public ResponseEntity<StuAttendanceModel> saveAttendance(@RequestBody StuAttendanceModel att) {
        return ResponseEntity.ok(stuAttendanceService.saveAttendance(att));
    }

}
