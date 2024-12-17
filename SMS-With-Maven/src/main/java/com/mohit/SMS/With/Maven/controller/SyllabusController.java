//package com.mdfaysalhossain.SMS.With.Maven.controller;
//
//import model.com.mohit.SMS.With.Maven.SyllabusModel;
//import model.com.mohit.SMS.With.Maven.TeacherAddModel;
//import model.com.mohit.SMS.With.Maven.UserModel;
//import repository.com.mohit.SMS.With.Maven.IUserRepo;
//import service.com.mohit.SMS.With.Maven.SyllabusService;
//import service.com.mohit.SMS.With.Maven.TeacherAddService;
//import jakarta.mail.MessagingException;
//import jakarta.mail.internet.MimeMessage;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.mail.javamail.MimeMessageHelper;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.validation.BindingResult;
//import org.springframework.validation.annotation.Validated;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.IOException;
//import java.nio.file.Files;
//import java.nio.file.Path;
//import java.nio.file.Paths;
//import java.sql.SQLException;
//import java.util.List;
//import java.util.Optional;
//
//@Controller
//public class SyllabusController {
//
//
//
//        @Autowired
//        SyllabusService syllabusService;
//
//    public SyllabusController(SyllabusService syllabusService) {
//        this.syllabusService = syllabusService;
//    }
//
//    @GetMapping("/syllabus/viewsyllabus")
//        public String getAllTeachersyllasbus(Model m) {
//
//            List<SyllabusModel> syList = syllabusService.getAllSyllabus();
//            m.addAttribute("syList", syList);
//            m.addAttribute("title", "view Teacher");
//            return "stSyllabusView";
//        }
//
//
//        @GetMapping("/syllabus/syllabusform")
//        public String saveform(Model m) {
//            m.addAttribute("syllabusform", new SyllabusModel());
//            return "stSyllabusAdd";
//        }
//
//
//
//
//        @PostMapping("/syllabus/syllabussave")
//        public String savesyllabus(@ModelAttribute SyllabusModel syllabusModel)  {
//             syllabusService.saveSyllabus(syllabusModel);
//
//
//            return "redirect:/syllabus/viewsyllabus";
//        }
//
//
//        @RequestMapping("/syllabus/syllabusDetails/{id}")
//        public String sysDetails(@PathVariable("id") int id, Model m){
//
//            Optional<SyllabusModel> sysllabus=syllabusService.getSyllabusById(id);
//            m.addAttribute("sysllabus", sysllabus);
//
//            return "";
//        }
//
//        @RequestMapping("/syllabus/delete/{id}")
//        public String deleteSysllabus(@PathVariable("id") int id) {
//            syllabusService.deleteSyllabusById(id);
//            return "redirect:/syllabus/viewsyllabus";
//        }
//
//
//
//
//    }
//
//
