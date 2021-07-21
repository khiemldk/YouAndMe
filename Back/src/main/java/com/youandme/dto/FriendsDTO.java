package com.youandme.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class FriendsDTO {
	private Integer id;
	private String firstName;
	private String lastName;
	private String major;
	private String avatar;
	private String coverPicture;
}
