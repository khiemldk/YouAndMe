package com.youandme.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.youandme.entities.User;
import com.youandme.request.UserRequest;
import com.youandme.response.BaseResponse;
import com.youandme.response.UserResponse;
import com.youandme.service.UserService;
import com.youandme.until.Error;

@RestController
@CrossOrigin
@RequestMapping("user")
public class UserController extends BaseController {

	@PostMapping("/update")
	public BaseResponse updateUser(@RequestBody UserRequest request) {
		if(request != null) {
			User user = findById(request.getId());
			if (user != null) {
				user.setGender(request.isGender());
				user.setStatus(request.isStatus());
				if (user.getBirthDay() == null && request.getBirthDay() != null) {
					user.setBirthDay(request.getBirthDay());
				} else if (user.getBirthDay() != null && request.getBirthDay() != null && !user.getBirthDay().equals(request.getBirthDay())) {
					user.setBirthDay(request.getBirthDay());
				}
				if (user.getAvatar() == null && request.getAvatar() != null) {
					user.setAvatar(request.getAvatar());
				} else if (user.getAvatar() != null && request.getAvatar() != null && !user.getAvatar().equals(request.getAvatar())) {
					user.setAvatar(request.getAvatar());
				}
				if (user.getCoverPicture() == null && request.getCoverPicture() != null) {
					user.setCoverPicture(request.getCoverPicture());
				} else if (user.getCoverPicture() != null && request.getCoverPicture() != null && !user.getCoverPicture().equals(request.getCoverPicture())) {
					user.setCoverPicture(request.getCoverPicture());
				}
				if (user.getUpdateDate() == null && request.getUpdateDate() != null) {
					user.setUpdateDate(request.getUpdateDate());
				} else if (user.getUpdateDate() != null && request.getUpdateDate() != null && !user.getUpdateDate().equals(request.getUpdateDate())) {
					user.setUpdateDate(request.getUpdateDate());
				}
				if (user.getCity() == null && request.getCity() != null) {
					user.setCity(request.getCity());
				} else if (user.getCity() != null && request.getCity() != null && !user.getCity().equals(request.getCity())) {
					user.setCity(request.getCity());
				}
				if (user.getCountry() == null && request.getCountry() != null) {
					user.setCountry(request.getCountry());
				} else if (user.getCountry() != null && request.getCountry() != null && !user.getCountry().equals(request.getCountry())) {
					user.setCountry(request.getCountry());
				}
				if (user.getCommune() == null && request.getCommune() != null) {
					user.setCommune(request.getCommune());
				} else if (user.getCommune() != null && request.getCommune() != null && !user.getCommune().equals(request.getCommune())) {
					user.setCommune(request.getCommune());
				}
				if (user.getDistrict() == null && request.getDistrict() != null) {
					user.setDistrict(request.getDistrict());
				} else if (user.getCommune() != null && request.getDistrict() != null && !user.getDistrict().equals(request.getDistrict())) {
					user.setDistrict(request.getDistrict());
				}
				if (request.getEmail() != null ) {
					if (checkEmail(request.getEmail())) {
						if (user.getEmail() == null) {
							user.setEmail(request.getEmail());
						} else {
							if (user.getEmail() != null && !user.getEmail().equals(request.getEmail())) {
								user.setEmail(request.getEmail());
							}
						}
					}
				}
				if (request.getPhoneNumber() != null ) {
					if (checkEmail(request.getPhoneNumber())) {
						if (user.getPhoneNumber() == null) {
							user.setPhoneNumber(request.getPhoneNumber());
						} else {
							if (user.getPhoneNumber() != null && !user.getPhoneNumber().equals(request.getPhoneNumber())) {
								user.setPhoneNumber(request.getPhoneNumber());
							}
						}
					}
				}
				if (user.getFirstName() == null && request.getFirstName() != null) {
					user.setFirstName(request.getFirstName());
				} else if (user.getFirstName() != null && request.getFirstName() != null && !user.getFirstName().equals(request.getFirstName())) {
					user.setFirstName(request.getFirstName());
				}
				if (user.getLastName() == null && request.getLastName() != null) {
					user.setLastName(request.getLastName());
				} else if (user.getLastName() != null && request.getLastName() != null && !user.getLastName().equals(request.getLastName())) {
					user.setLastName(request.getLastName());
				}
				if (user.getPass() == null && request.getPass() != null) {
					user.setPass(request.getPass());
				} else if (user.getPass() != null && request.getPass() != null && !user.getPass().equals(request.getPass())) {
					user.setPass(request.getLastName());
				}
				if (user.getMajor() == null && request.getMajor() != null) {
					user.setMajor(request.getMajor());
				} else if (user.getMajor() != null && request.getMajor() != null && !user.getMajor().equals(request.getMajor())) {
					user.setMajor(request.getMajor());
				}
				UpdateUserInfo(user);
				return new UserResponse(Error.SUCCESS);
			} else {
			 	return new UserResponse(Error.UNKNOWN);
			}
		}
		else {
			return new UserResponse(Error.UNKNOWN);
		}
			
	}

	@PostMapping("/insert")
	public BaseResponse insertUser(@RequestBody UserRequest request) {
		User user = new User();
		if (request != null) {
			if (request.getEmail() != null) {
				if (checkEmail(request.getEmail())) {
					List<User> list = findByUserName("email", request.getEmail());
					if (list.size() == 0) {
						if (request.getEmail() != null) {
							user.setEmail(request.getEmail());
						}
						if (request.getFirstName() != null) {
							user.setFirstName(request.getFirstName());
						}
						if (request.getLastName() != null) {
							user.setLastName(request.getLastName());
						}
						if (request.getPass() != null ) {
							user.setPass(request.getPass());
						}
						if (request.getBirthDay() != null) {
							user.setBirthDay(request.getBirthDay());
						}
						user.setGender(request.isGender());
						if (request.getCity() != null) {
							user.setCity(request.getCity());
						}
						if (request.getCountry() != null) {
							user.setCountry(request.getCountry());
						}
						user.setActiveFlag(true);
						insertNewUser(user);
						return new UserResponse(Error.SUCCESS);
					} else {
						return new UserResponse(Error.VALID_EMAIL);
					}
				} else {
					return new UserResponse(Error.SYNTAX_EMAIL);
				}
				
			} else {
				return new UserResponse(Error.UNKNOWN);
			}
		} else {
			return new UserResponse(Error.UNKNOWN);
		}
	}
}
