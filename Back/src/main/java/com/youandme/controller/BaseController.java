package com.youandme.controller;

import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;

import com.youandme.entities.User;
import com.youandme.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class BaseController {
	@Autowired UserService userService;
	
	// check valid
	protected boolean checkPhoneNumber(String phoneNumber) {
		String regex = "(8488|8491|8494|8483|8484|8485|8481|8482)+([0-9]{7})\\b";
		if (phoneNumber.isEmpty()) {
			return true;
		} else if (phoneNumber.length() == 11) {
			return Pattern.matches(regex, phoneNumber);
		}
		return false;
	}

	protected boolean checkEmail(String email) {
		String regex = "^[a-zA-Z0-9_+&*-]+(?:\\." + "[a-zA-Z0-9_+&*-]+)*@" + "(?:[a-zA-Z0-9-]+\\.)+[a-z"
				+ "A-Z]{2,7}$";
		if (email == null)
			return false;
		return Pattern.matches(regex, email);
	}
	
	// user common
	public User findById(int id) {
		return userService.findById(id);
	}
	
	public List<User> getAllUser(){
		return userService.getAllUser();
	}
	
	public List<User> findByUserName(String name, Object value){
		return userService.findByProp(name, value);
	}
	
	public List<User> checkLogin(Map<String, Object> maps)  {
		return userService.findByProps(maps);
	}
	
	public void insertNewUser(User user) {
		userService.insertUser(user);
	}
	
	public void UpdateUserInfo(User user) {
		userService.updateUserInfo(user);
	}
	
}
