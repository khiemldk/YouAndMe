package com.youandme.daoimple;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.youandme.dao.FriendDAO;
import com.youandme.entities.Friend;

@Repository
@Transactional(rollbackFor = Exception.class)
public class FriendImple extends BaseImple<Friend> implements FriendDAO<Friend>{

}
