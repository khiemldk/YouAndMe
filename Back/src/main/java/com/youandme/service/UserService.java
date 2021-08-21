package com.youandme.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.youandme.dao.UserDAO;
import com.youandme.entities.User;
import org.springframework.util.ObjectUtils;

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

	@Cacheable("user")
	public User getByEmail(String email){
		User user = userDAO.findByEmail("email" ,email);
		return user;
	}

	public boolean emailIsExit(String email){
		if(ObjectUtils.isEmpty(userDAO.findByEmail("email" ,email))) {
			return true;
		}
		return false;
	}

	public List<User> getListFriendById(Integer userId){
		return userDAO.getListFriendsByUserId(userId);
	}
}
