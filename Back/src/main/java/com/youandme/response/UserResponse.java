package com.youandme.response;

import com.youandme.dto.UserDTO;
import com.youandme.until.Error;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class UserResponse extends BaseResponse{
	List<UserDTO> data = new ArrayList<>();
	public UserResponse(Error error) {
		super(error);
	}
}
