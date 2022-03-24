package com.example.ch16request.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Slf4j
@Controller
public class HomeController {

    @GetMapping("/registerForm")
    public String registerFrom(){
        log.info("registerForm");

        return "registerForm";
    }
}
