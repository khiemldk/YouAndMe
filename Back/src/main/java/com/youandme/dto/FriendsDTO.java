package com.youandme.dto;

import com.youandme.entities.Friend;
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
		friendsDTO.set

	}
}
