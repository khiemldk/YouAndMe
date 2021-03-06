package com.youandme.daoimple;

import com.youandme.entities.Role;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.youandme.dao.FriendRequestDAO;
import com.youandme.entities.FriendRequest;

import java.util.List;

@Repository
@Transactional(rollbackFor = Exception.class)
public class FriendRequestImple extends BaseImple<FriendRequest> implements FriendRequestDAO<FriendRequest> {

}
