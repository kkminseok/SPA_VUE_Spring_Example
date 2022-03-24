package com.bootest.chapter09.domain;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

//@NoArgsConstructor
//@AllArgsConstructor
@RequiredArgsConstructor
@AllArgsConstructor
@ToString(exclude = "userName")
public class Member {

    private final String userId;
    private final String password;
    private String userName;
}
