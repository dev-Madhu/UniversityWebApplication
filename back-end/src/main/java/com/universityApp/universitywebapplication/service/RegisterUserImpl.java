package com.universityApp.universitywebapplication.service;

import com.universityApp.universitywebapplication.entity.User;
import com.universityApp.universitywebapplication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RegisterUserImpl implements RegisterUser{

    @Autowired
    private UserRepository userRepository;
    public User saveUserDetails(User user){
        return userRepository.save(user);
    }

    public List<User> fetchAllUsers(){
        return userRepository.findAll();
    }
    public User authenticateUser(String email,String password){
        User found=userRepository.findByEmail(email);
       String foundEmail=found.getEmail();
       String foundPass=found.getPassword();
       if(foundEmail.equals(email)&& foundPass.equals(password)){
           return found;
       }
       return  null;
    }
}
