package com.mohit.SMS.With.Maven.repository;

import com.mohit.SMS.With.Maven.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IUserRepo extends JpaRepository<UserModel,Integer> {



}
