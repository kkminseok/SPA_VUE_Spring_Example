package com.example.ch16request.controller;

import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class MemberController {

    @GetMapping("/register/{userId}")
    public ResponseEntity<String> register01(@PathVariable("userId") String userId){
        log.info("register01");

        log.info("userId = " + userId);

        ResponseEntity<String> entity = new ResponseEntity<String>("Succeess", HttpStatus.OK);
        return entity;
    }
}
