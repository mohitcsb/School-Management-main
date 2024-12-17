package com.mohit.SMS.With.Maven.repository;

import com.mohit.SMS.With.Maven.model.ImageModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IImageDataRepo extends JpaRepository<ImageModel, Long> {
}
