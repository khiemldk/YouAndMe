package com.youandme.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.youandme.dao.FriendRequestDAO;
import com.youandme.entities.FriendRequest;

@Service
public class FriendRequestService {
	@Autowired
	private FriendRequestDAO<FriendRequest> friendRequestDAO;
	
	public void InsertFriendRequest(FriendRequest friendRequest) {
		friendRequestDAO.insert(friendRequest);
	}
	
	public void DeleteFriendRequest(FriendRequest friendRequest) {
		friendRequestDAO.delete(friendRequest);
	}
	
	public FriendRequest findById(int id) {
		return friendRequestDAO.findById(FriendRequest.class, id);
	}
}
