package com.youandme.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.youandme.dto.FriendsDTO;
import com.youandme.entities.Friend;
import com.youandme.entities.User;
import com.youandme.request.UserRequest;
import com.youandme.response.BaseResponse;
import com.youandme.response.FriendResponse;
import com.youandme.until.Error;

@RestController
public class FriendController extends BaseController {
	@PostMapping("/getfriends")
	public BaseResponse getFriend(@RequestBody UserRequest request){
		if (request != null) {
			if (request.getId() != null) {
				User user = findById(request.getId());
				if (user != null) {
					return new FriendResponse(Error.ID_NOT_FOUND, new ArrayList<>(),0,0);
				} else {
					return new FriendResponse(Error.ID_NOT_FOUND, new ArrayList<>(),0,0);
				}
			} else {
				return new FriendResponse(Error.UNKNOWN, new ArrayList<>(),0,0);
			}
		} else {
			return new FriendResponse(Error.UNKNOWN, new ArrayList(), 0 ,0);
		}
	}
}
