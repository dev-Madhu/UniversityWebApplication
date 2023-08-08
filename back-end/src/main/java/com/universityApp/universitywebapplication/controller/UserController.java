package com.universityApp.universitywebapplication.controller;

import com.universityApp.universitywebapplication.entity.User;
import com.universityApp.universitywebapplication.service.RegisterUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins="*")
public class UserController {

    @Autowired
    private RegisterUser registerUser;
    @PostMapping("/users")
    public User registerUserDetails(@RequestBody User user){
        return registerUser.saveUserDetails(user);
    }

    @GetMapping("/users/all")
    public List<User> getAllRegisteredUsers(){
        return registerUser.fetchAllUsers();
    }

    @PostMapping("/users/authenticate")
    public User authenticateUser(@RequestBody User user){
        return registerUser.authenticateUser(user.getEmail(),user.getPassword());
    }




}
