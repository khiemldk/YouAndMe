package com.youandme.response;

import com.youandme.until.Error;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginResponse extends BaseResponse{
	public LoginResponse(Error error) {
		super(error);

	}
}
