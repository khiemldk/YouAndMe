package com.youandme.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.youandme.entities.User;
import com.youandme.request.LoginRequest;
import com.youandme.response.BaseResponse;
import com.youandme.response.LoginResponse;
import com.youandme.response.UserResponse;
import com.youandme.until.Error;

@RestController
@CrossOrigin
public class Login extends BaseController {

	@PostMapping("/login")
	public BaseResponse checkLogin(@RequestBody LoginRequest request) {
		if (request != null) {
			if (request.getEmail() != null) {
				if (checkEmail(request.getEmail())) {
					List<User> userNames = findByUserName("email", request.getEmail());
					if (userNames.size() != 0) {
						HashMap<String, Object> maps = new HashMap<String, Object>();
						maps.put("pass", request.getPassword());
						maps.put("email", request.getEmail());
						List<User> logins = checkLogin(maps);
						if (logins.size() != 0) {
							return new LoginResponse(Error.SUCCESS);
						} else {
							return new LoginResponse(Error.WRONG_PASSWORD);
						}
					} else {
						return new LoginResponse(Error.WRONG_USERNAME);
					}
				} else {
					return new LoginResponse(Error.SYNTAX_EMAIL);
				}
			} else {
				return new LoginResponse(Error.UNKNOWN);
			}

		} else {
			return new LoginResponse(Error.UNKNOWN);
		}
	}
}
