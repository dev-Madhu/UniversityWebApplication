package com.universityApp.universitywebapplication.service;

import com.universityApp.universitywebapplication.entity.University;
import com.universityApp.universitywebapplication.repository.UniversityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class UniversityServiceImpl implements UniversityService {
    private static final String API_URL = "http://universities.hipolabs.com/search?country=india";

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private UniversityRepository universityRepository;

    public void fetchDataAndStoreInDatabase() {
        University[] universities = restTemplate.getForObject(API_URL, University[].class);
        for (University university : universities) {
            universityRepository.save(university);
        }
    }

    @Override
    public List<University> fetchAllUniversities() {
        return universityRepository.findAll();
    }

}


