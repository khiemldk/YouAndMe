package com.youandme.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.youandme.dto.FriendsDTO;
import com.youandme.entities.Friend;
import com.youandme.entities.FriendRequest;
import com.youandme.entities.User;
import com.youandme.request.FriendRequestRequest;
import com.youandme.request.UserRequest;
import com.youandme.response.BaseResponse;
import com.youandme.response.FriendRequestResponse;
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
	
	@PostMapping("/insert/request")
	public BaseResponse insertRequest(@RequestBody FriendRequestRequest request) {
		if (request != null) {
			if (request.getUserId() != null ) {
				User user = findById(request.getUserId());
				if (user != null ) {
					User user2 = findById(request.getUserId2());
					if (user2 != null) {
						FriendRequest friendRequest = new FriendRequest();
						friendRequest.setUserId(request.getUserId());
						friendRequest.setUserId2(request.getUserId2());
						friendRequest.setActiveFlag(true);
						friendRequest.setCreateDate(new Date());
						friendRequest.setUpdateDate(new Date());
						InsertFriendRequest(friendRequest);
						return new FriendRequestResponse(Error.SUCCESS);
					} else {
						return new FriendRequestResponse(Error.ID_NOT_FOUND);
					}
				} else {
					return new FriendRequestResponse(Error.ID_NOT_FOUND);
				}
			} else {
				return new FriendRequestResponse(Error.UNKNOWN);
			}
		} else {
			return new FriendRequestResponse(Error.UNKNOWN);
		}
	}
	
	@PostMapping("/delete/request")
	public BaseResponse deleteFriendRequest(@RequestBody FriendRequestRequest request) {
		if (request != null) {
			if (request.getId() != null ) {
				FriendRequest friendRequest = findFriendRequestById(request.getId());
				if (friendRequest != null) {
					deleteFriendRequest(friendRequest);
					return new FriendRequestResponse(Error.SUCCESS);
				} else {
					return new FriendRequestResponse(Error.UNKNOWN);
				}
			} else {
				return new FriendRequestResponse(Error.ID_NOT_FOUND);
			}
		} else {
			return new FriendRequestResponse(Error.UNKNOWN);
		}
	}
}
