package com.youandme.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.youandme.dao.UserDAO;
import com.youandme.entities.User;

@Service
public class UserService {

	@Autowired
	private UserDAO<User> userDAO;
	
	public List<User> getAllUser() {
		return userDAO.getAll();
	}
	
}
