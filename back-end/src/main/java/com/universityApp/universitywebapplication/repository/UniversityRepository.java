package com.universityApp.universitywebapplication.repository;



import com.universityApp.universitywebapplication.entity.University;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UniversityRepository  extends JpaRepository<University,Long> {

}
