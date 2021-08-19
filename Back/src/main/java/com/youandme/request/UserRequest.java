package com.youandme.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.youandme.entities.User;
import lombok.Getter;
import lombok.Setter;
import org.springframework.util.ObjectUtils;

import java.util.Date;
import java.util.Set;

@Getter
@Setter
public class UserRequest extends BaseRequest{
	private Integer Id;
	private String firstName;
	private String lastName;
	private String phoneNumber;
	private String email;
	private Date birthDay;
	private boolean gender;
	private String city;
	private String country;
	private String avatar;
	private String coverPicture;
	private String major;
	private String commune;
	private String district;
	private boolean status;
	private Date createDate;
	private Date updateDate;
	private String userName;
	private String pass;
	private Set<Integer> role;

	
	public UserRequest(
		@JsonProperty("Id") Integer id,
		@JsonProperty("firstName") String firstName,
		@JsonProperty("lastName") String lastName,
		@JsonProperty("phoneNumber") String phoneNumber,
		@JsonProperty("email") String email,
		@JsonProperty("birthDay") Date birthDay,
		@JsonProperty("gender") boolean gender,
		@JsonProperty("city") String city,
		@JsonProperty("country") String country,
		@JsonProperty("avatar") String avatar,
		@JsonProperty("coverPicture") String coverPicture,
		@JsonProperty("major") String major,
		@JsonProperty("commune") String commune,
		@JsonProperty("district") String district,
		@JsonProperty("status") boolean status,
		@JsonProperty("createDate") Date createDate,
		@JsonProperty("updateDate") Date updateDate,
		@JsonProperty("userName") String userName,
		@JsonProperty("pass") String pass,
		@JsonProperty("role") Set<Integer> role
	) {
		this.Id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.birthDay = birthDay;
		this.gender = gender;
		this.city = city;
		this.country = country;
		this.avatar = avatar;
		this.coverPicture = coverPicture;
		this.district = district;
		this.major = major;
		this.status = status;
		this.createDate = createDate;
		this.updateDate = updateDate;
		this.commune = commune;
		this.userName = userName;
		this.pass = pass;
		this.role = role;
	}
	public static User convertFromUserRequest(UserRequest request){
		User user = new User();
		if(!ObjectUtils.isEmpty(request)){
			user.setActiveFlag(true);
			user.setId(request.getId());
			user.setFirstName(request.getFirstName());
			user.setLastName(request.getLastName());
			user.setPhoneNumber(request.getPhoneNumber());
			user.setEmail(request.getEmail());
			user.setBirthDay(request.getBirthDay());
			user.setGender(request.isGender());
			user.setCity(request.getCity());
			user.setCountry(request.getCountry());
			user.setAvatar(request.getAvatar());
			user.setCoverPicture(request.getCoverPicture());
			user.setDistrict(request.getDistrict());
			user.setMajor(request.getMajor());
			user.setStatus(request.isStatus());
			user.setCreateDate(request.getCreateDate());
			user.setUpdateDate(request.getUpdateDate());
			user.setCommune(request.getCommune());
			user.setPass(request.getPass());
		}
		return user;
	}
}
