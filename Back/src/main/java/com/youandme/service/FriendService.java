package com.youandme.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.youandme.dao.FriendDAO;
import com.youandme.entities.Friend;

@Service
public class FriendService {

	@Autowired
	private FriendDAO<Friend> friendDAO;
	
	public List<Friend> getAllFriend(){
		return friendDAO.getAll();
	}
}
