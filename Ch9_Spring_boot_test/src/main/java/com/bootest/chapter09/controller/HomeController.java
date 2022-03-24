package com.bootest.chapter09.controller;


import org.apache.tomcat.jni.Local;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class HomeController {
    @GetMapping("/")
    public String home(Local local, Model model){
        log.info("Welcome home! The Client local is +"  + local +".");

        LocalDateTime now = LocalDateTime.now();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy년 M월 d일 (E) a h시 m분 s초" );
        String formmatedNow = now.format(formatter);

        model.addAttribute("serverTime",formmatedNow);

        return "home";

    }

    @GetMapping("/ajaxHome")
    public String ajaxHome(){
        return "ajaxHome";
    }
}