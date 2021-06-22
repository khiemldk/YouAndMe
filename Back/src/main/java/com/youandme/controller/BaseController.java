package com.youandme.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.youandme.dto.ActivityDTO;
import com.youandme.dto.FriendsDTO;
import com.youandme.entities.Activity;
import com.youandme.entities.Friend;
import com.youandme.entities.User;
import com.youandme.service.ActivityService;
import com.youandme.service.FriendService;
import com.youandme.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class BaseController {
	@Autowired UserService userService;
	@Autowired ActivityService activityService;
	@Autowired FriendService friendService;
	
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
	public User findById(Integer id) {
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
	
	
	// activity
	public List<Activity> getAllActivity(String name, Object value){
		return activityService.getAllActivity(name, value);
	}
	
	public ActivityDTO convertActivityDTO(Activity activity) {
		return ActivityDTO.builder()
			.type(activity.getType())
			.createDate(activity.getCreateDate())
			.build();
	}
	
	
	// Friend
	public List<Friend> getAllFriends(String name, Object value) {
		return friendService.getAllFriend(name, value);
	}
	
	public FriendsDTO convertFriendsDTO(User user) {
		return FriendsDTO.builder()
				.firstName(user.getFirstName())
				.lastName(user.getLastName())
				.major(user.getMajor())
				.avatar(user.getAvatar())
				.coverPicture(user.getCoverPicture())
				.build();
	}
	
//	_____________________________________________________________________________________________
	
	 protected <T> Page<T> setUpPage(List<T> data, int pageSize, int pageNumber) {
	        Pageable pageable = PageRequest.of(pageNumber, pageSize);
	        int start = (int) pageable.getOffset(); // offset = pageSize * pageNumber
	        int end = Math.min((start + pageable.getPageSize()), data.size());
	        if (start < end) {
	            return new PageImpl<>(data.subList(start, end), pageable, data.size());
	        } else
	            return new PageImpl<>(new ArrayList<>(), pageable, data.size());
	    }
	
}
