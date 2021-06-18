package com.youandme.response;

import com.youandme.until.Error;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class UserResponse extends BaseResponse{
	
	public UserResponse(Error error) {
		super(error);

	}
}
