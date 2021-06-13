package com.youandme.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Data
public class Comment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private int id;

	@Column(name = "USERID")
	private int userId;

	@Column(name = "POSTID")
	private int postId;

	@Column(name = "CONTENT")
	private String content;

	@Column(name = "CREATEDATE")
	private Date createDate;
	
	@Column(name = "UPDATEDATE")
	private Date updateDate;
	
	@Column(name = "ACTIVEFLAG")
	private boolean activeFlag;

	@ManyToOne
	@JsonIgnore
	@JoinColumn(name = "USERID", referencedColumnName = "ID", insertable = false, updatable = false)
	private User user;

	@ManyToOne
	@JsonIgnore
	@JoinColumn(name = "POSTID", referencedColumnName = "ID", insertable = false, updatable = false)
	private Post post;
}
