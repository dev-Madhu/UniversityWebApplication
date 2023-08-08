package com.universityApp.universitywebapplication.service;

import com.universityApp.universitywebapplication.entity.User;

import java.util.List;

public interface RegisterUser {

    public User saveUserDetails(User user);

    public List<User> fetchAllUsers();

    public User authenticateUser(String email, String password);
}
