package com.youandme.service;

import java.util.List;
import java.util.Map;

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
	
	public List<User> findByProp(String name, Object value) {
		return userDAO.findByProp(name, value);
	}
	
	public List<User> findByProps(Map<String, Object> maps) {
		return userDAO.findByProps(maps);
	}
	
	public void insertUser(User user) {
		userDAO.insert(user);
	}
	
	public void updateUserInfo(User user) {
		userDAO.update(user);
	}
	
	public User findById(int id) {
		return userDAO.findById(User.class, id);
	}
}
