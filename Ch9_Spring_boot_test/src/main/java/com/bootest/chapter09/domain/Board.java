package com.bootest.chapter09.domain;

import lombok.*;

import java.time.LocalDateTime;

//@NoArgsConstructor
//@RequiredArgsConstructor
/*
@AllArgsConstructor
@Setter
@Getter
@EqualsAndHashCode(of="boardNo")
@ToString

 */
@Getter
@Setter
@ToString
public class Board {

    //@NonNull
    private long boardNo;
    private String title;
    private String content;
    private String writer;
    private LocalDateTime regDate;
}
