package com.youandme.dao;

import java.util.List;

public interface UserDAO<E> extends BaseDAO<E>{
    List<E> findByEmail(String name, Object value);
    List<E> getListFriendsByUserId(Integer listFriend);
}
