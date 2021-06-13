package com.youandme.daoimple;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.youandme.dao.UserDAO;
import com.youandme.entities.User;

@Repository
@Transactional(rollbackFor = Exception.class)
public class UserImple extends BaseImple<User> implements UserDAO<User>{
	
}
