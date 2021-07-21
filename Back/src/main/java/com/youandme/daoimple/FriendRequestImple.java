package com.youandme.daoimple;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.youandme.dao.FriendRequestDAO;
import com.youandme.entities.FriendRequest;

@Repository
@Transactional(rollbackFor = Exception.class)
public class FriendRequestImple extends BaseImple<FriendRequest> implements FriendRequestDAO<FriendRequest> {

}
