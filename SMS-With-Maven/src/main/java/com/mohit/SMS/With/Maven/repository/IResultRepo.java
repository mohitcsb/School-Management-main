package com.mohit.SMS.With.Maven.repository;


import com.mohit.SMS.With.Maven.model.ResultAddModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Repository
public interface IResultRepo  extends JpaRepository<ResultAddModel,Long> {


//    @Query("SELECT c FROM ResultAddModel c WHERE c.rclass = :rclass")
    List<ResultAddModel> findByStudentAddModelStClass(@RequestParam("rclass") String rclass);


    ResultAddModel findByrid(long rid);
    List<ResultAddModel> findByStudentAddModelSid(Long sid);



}
