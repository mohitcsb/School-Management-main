package com.mohit.SMS.With.Maven.repository;

import com.mohit.SMS.With.Maven.model.RoleModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRoleRepo extends JpaRepository<RoleModel,Integer> {


}
