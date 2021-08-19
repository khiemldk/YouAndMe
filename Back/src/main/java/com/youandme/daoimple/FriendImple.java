package com.youandme.daoimple;

import com.youandme.entities.Role;
import com.youandme.entities.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.youandme.dao.FriendDAO;
import com.youandme.entities.Friend;

import java.util.List;

@Repository
@Transactional(rollbackFor = Exception.class)
public class FriendImple extends BaseImple<Friend> implements FriendDAO<Friend>{

}
