package com.bootest.chapter09.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@EqualsAndHashCode(of = {"userNo","itemId"})
public class UserItem {

    private int userNo;
    private int itemId;

    private String itemName;
    private Integer price;
    private String description;
}
