package com.universityApp.universitywebapplication.service;

import com.universityApp.universitywebapplication.entity.University;

import java.util.List;

public interface UniversityService {

   public  void fetchDataAndStoreInDatabase();
   public List<University> fetchAllUniversities();
}
