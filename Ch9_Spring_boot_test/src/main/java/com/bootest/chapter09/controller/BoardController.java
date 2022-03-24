package com.bootest.chapter09.controller;

import com.bootest.chapter09.domain.Board;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/boards")
public class BoardController {

    @GetMapping
    public ResponseEntity<List<Board>> list() {
        log.info("list");

        List<Board> boardList = new ArrayList<>();

        Board board =new Board();

        board.setBoardNo(1);
        board.setTitle("Title");
        board.setContent("Content");
        board.setWriter("Wirter");
        board.setRegDate(LocalDateTime.now());

        boardList.add(board);

        board = new Board();

        board.setBoardNo(2);
        board.setTitle("Title2");
        board.setContent("Content2");
        board.setWriter("writer2");
        board.setRegDate(LocalDateTime.now());

        boardList.add(board);

        ResponseEntity<List<Board>> entity = new ResponseEntity<>(boardList, HttpStatus.OK);

        return entity;
    }

    @PostMapping
    public ResponseEntity<String> register(@RequestBody Board board){
        log.info("register");

        ResponseEntity<String> entity = new ResponseEntity<>("SUCCESS",HttpStatus.OK);

        return entity;
    }

    @GetMapping("/{boardNo}")
    public ResponseEntity<Board> read(@PathVariable("boardNo") int boardNo) {
        log.info("read");

        Board board = new Board();

        board.setBoardNo(boardNo);
        board.setTitle("TITLTE");
        board.setContent("Content right");
        board.setWriter("kms");
        board.setRegDate(LocalDateTime.now());

        ResponseEntity<Board> entity = new ResponseEntity<>(board,HttpStatus.OK);

        return entity;
    }

    @DeleteMapping("/{boardNo}")
    public ResponseEntity<String> remove(@PathVariable("boardNo") int boardNo) {
        log.info("remove");

        ResponseEntity<String> entity = new ResponseEntity<>("Success",HttpStatus.OK);

        return entity;
    }

    @PutMapping("/{boardNo}")
    public ResponseEntity<String> modify(@PathVariable("boardNo") int boardNo, @RequestBody Board board){
        log.info("modify");

        ResponseEntity<String> entity = new ResponseEntity<>("Success",HttpStatus.OK);

        return entity;

    }

}
