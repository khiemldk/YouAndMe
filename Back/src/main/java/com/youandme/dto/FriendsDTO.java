package com.youandme.dto;

import com.youandme.entities.Friend;
import com.youandme.entities.User;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;



@Data
public class FriendsDTO {
	private Integer id;
	private String firstName;
	private String lastName;
	private String major;
	private String avatar;
	private String coverPicture;

		public static FriendsDTO formatFromFriend(User friend){
		FriendsDTO friendsDTO= new FriendsDTO();
		friendsDTO.setId(friend.getId());
		friendsDTO.setFirstName(friend.getAvatar());
		friendsDTO.setLastName(friend.getLastName());
		friendsDTO.setMajor(friend.getMajor());
		friendsDTO.setCoverPicture(friend.getCoverPicture());
		return friendsDTO;
	}
}
