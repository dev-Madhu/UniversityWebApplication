package com.universityApp.universitywebapplication.controller;


import com.universityApp.universitywebapplication.entity.University;
import com.universityApp.universitywebapplication.service.UniversityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api/v2")
@CrossOrigin(origins = "*")
public class UniversityWebController {

    @Autowired
    private UniversityService universityService;

    @GetMapping("/fetchAllUniversities")
    public String fetchAndStore() {
        universityService.fetchDataAndStoreInDatabase();
        return "Data fetched and stored in the database.";
    }

    @GetMapping("/fetch")
    public List<University> fetchAllUniversities(){
        return universityService.fetchAllUniversities();
    }


}
