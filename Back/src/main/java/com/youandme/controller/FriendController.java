package com.youandme.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.youandme.entities.Friend;

@RestController
public class FriendController extends BaseController {
	@GetMapping("/getfriends")
	public List<Friend> getFriend(){
		return getAllFriends();
	}
}
