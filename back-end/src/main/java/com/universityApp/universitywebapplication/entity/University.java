package com.universityApp.universitywebapplication.entity;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class University {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    private String country;
    private String name;
    private List<String> domains;
    private String alphaTwoCode;
    private String stateProvince;
    private List<String> webPages;
}
