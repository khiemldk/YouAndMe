package com.youandme.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Data;
import lombok.ToString;
import lombok.ToString.Include;


@Entity
@Data
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Integer Id;
	
	@Column(name = "FIRSTNAME")
	private String firstName;
	
	@Column(name = "LASTNAME")
	private String lastName;
	
	@Column(name = "BIRTHDAY")
	private Date birthDay;
	
	@Column(name = "GENDER")
	private boolean gender;
	
	@Column(name = "COMMUNE")
	private String commune;
	
	@Column(name = "DISTRICT")
	private String district;
	
	@Column(name = "CITY")
	private String city;
	
	@Column(name = "COUNTRY")
	private String country;
	
	@Column(name = "MAJOR")
	private String major;
	
	@Column(name = "EMAIL")
	private String email;
	
	@Column(name = "PHONENUMBER")
	private String phoneNumber;
	
	@Column(name = "AVATAR")
	private String avatar;
	
	@Column(name = "COVERPICTURE")
	private String coverPicture;
	
	@Column(name = "STATUS")
	private boolean status;
	
	@Column(name = "USERNAME")
	private String userName;
	
	@Column(name = "PASS")
	private String pass;
	
	@Column(name = "TOKEN")
	private String token;
	
	@Column(name = "CREATEDATE")
	private Date createDate;
	
	@Column(name = "UPDATEDATE")
	private Date updateDate;
	
	@Column(name = "ACTIVEFLAG")
	private boolean activeFlag;
	
	@OneToMany(targetEntity = Friend.class, mappedBy = "user", cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    }, fetch = FetchType.LAZY)
	@JsonIgnore
    private List<Friend> friends;
//	
//	@OneToMany(targetEntity = Follower.class, mappedBy = "user", cascade = {
//            CascadeType.PERSIST,
//            CascadeType.MERGE
//    }, fetch = FetchType.LAZY)
//    private List<Follower> Followers;
//	
//	@OneToMany(targetEntity = Activity.class, mappedBy = "user", cascade = {
//            CascadeType.PERSIST,
//            CascadeType.MERGE
//    }, fetch = FetchType.LAZY)
//    private List<Activity> Activity;
//	
//	@OneToMany(targetEntity = UserTalk.class, mappedBy = "user", cascade = {
//            CascadeType.PERSIST,
//            CascadeType.MERGE
//    }, fetch = FetchType.LAZY)
//    private List<UserTalk> userTalk;
//	
//	@OneToMany(targetEntity = Tag.class, mappedBy = "user", cascade = {
//            CascadeType.PERSIST,
//            CascadeType.MERGE
//    }, fetch = FetchType.LAZY)
//    private List<Tag> tag;
//	
//	
//	@OneToMany(targetEntity = Notification.class, mappedBy = "user", cascade = {
//            CascadeType.PERSIST,
//            CascadeType.MERGE
//    }, fetch = FetchType.LAZY)
//    private List<Notification> notification;
//	
//	@OneToMany(targetEntity = Job.class, mappedBy = "user", cascade = {
//            CascadeType.PERSIST,
//            CascadeType.MERGE
//    }, fetch = FetchType.LAZY)
//    private List<Job> job;
//	
//	@OneToMany(targetEntity = Interest.class, mappedBy = "user", cascade = {
//            CascadeType.PERSIST,
//            CascadeType.MERGE
//    }, fetch = FetchType.LAZY)
//    private List<Interest> interest;
}
