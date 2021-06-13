package com.youandme.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.youandme.entities.Friend;
import com.youandme.entities.User;
import com.youandme.service.FriendService;
import com.youandme.service.UserService;

@RestController
public class BaseController {
	@Autowired
	private UserService userService;
	
	@Autowired
	private FriendService friendService;
	
	@GetMapping("/test")
	@ResponseBody
	public List<User> getAllUser(){
		return userService.getAllUser();
	}
	
	@GetMapping("/test1")
	@ResponseBody
	public List<Friend> getAllFriend(){
		return friendService.getAllFriend();
	}
}
