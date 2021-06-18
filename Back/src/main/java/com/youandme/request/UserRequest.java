package com.youandme.request;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRequest extends BaseRequest{
	private int Id;
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
	
	public UserRequest(
		@JsonProperty("Id") int id,
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
		@JsonProperty("pass") String pass
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
		
	}
}
