package com.youandme.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Post {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private int id;
	
	@Column(name = "CONTENT")
	private String content;
	

	@Column(name = "LIKECOUNT")
	private int likeCount;
	
	@Column(name = "SHARECOUNT")
	private int shareCount;
	
	@Column(name = "TYPE")
	private int type;
	
	@Column(name = "PRIVACY")
	private int privacy;
	
	@Column(name = "ISHIDE")
	private boolean isHide;
	
	@Column(name = "CREATEDATE")
	private Date createDate;
	@Column(name = "UPDATEDATE")
	private Date updateDate;
	@Column(name = "ACTIVEFLAG")
	private boolean activeFlag;

}
