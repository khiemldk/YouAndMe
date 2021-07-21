package com.youandme.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class FriendRequestRequest {
	private Integer id;
	private Integer userId;
	private Integer userId2;
	
	public FriendRequestRequest(@JsonProperty("userId") Integer userId,
			@JsonProperty("userId2") Integer userId2
	) {
		this.userId =  userId;
		this.userId2 = userId2;
	}
}
