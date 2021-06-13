package com.youandme.entities;

import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Data
public class Friend {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private int id;

	@Column(name = "USERID")
	private int userId;

	@Column(name = "ISFOLLOW")
	private boolean isFollow;

	@Column(name = "ISFAVORITE")
	private int isFavorite;

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
}
