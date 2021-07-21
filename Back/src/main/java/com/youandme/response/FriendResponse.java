package com.youandme.response;

import static com.youandme.until.CONSTANTS.RESULT;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.youandme.dto.FriendsDTO;
import com.youandme.until.Error;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FriendResponse extends BaseResponse {
	@JsonProperty(RESULT)
	private List<FriendsDTO> list;
	private int totalPage;
    private int totalFriend;
    public FriendResponse(
    	Error error, 
    	List<FriendsDTO> list, 
   		int totalPage, 
  		int totalFriend ) {
    	super(error);
    	this.list = list;
    	this.totalPage = totalPage;
    	this.totalFriend = totalFriend;
    }
    
}
