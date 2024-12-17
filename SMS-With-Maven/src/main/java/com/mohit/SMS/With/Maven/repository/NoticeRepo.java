package com.mohit.SMS.With.Maven.repository;

import com.mohit.SMS.With.Maven.model.NoticeModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoticeRepo extends JpaRepository<NoticeModel, Long> {
}
