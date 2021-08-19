package com.youandme.response;

import com.youandme.until.Error;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginResponse extends BaseResponse{
	private String accsessToken;
	private String tokenType ="youAndMe";
	public LoginResponse(Error error) {
		super(error);
	}
	public LoginResponse(String accsessToken){
		super(accsessToken);
	}
}
