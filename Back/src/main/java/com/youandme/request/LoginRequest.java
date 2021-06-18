package com.youandme.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Getter
@Setter

public class LoginRequest extends BaseRequest{
	private String email;
	private String password;
	public LoginRequest(@JsonProperty("email") String email,@JsonProperty("password") String password) {
		this.email = email; 
		this.password = password;
	}
}
