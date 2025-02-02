package com.mohit.SMS.With.Maven.repository;

import com.mohit.SMS.With.Maven.model.ClassRutineModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IClassRutineRepo extends JpaRepository<ClassRutineModel,Integer> {


    List<ClassRutineModel> findAllByCrClass(int id);


}
