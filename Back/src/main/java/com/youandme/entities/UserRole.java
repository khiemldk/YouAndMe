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
import lombok.ToString;

@Entity
@Data
public class UserRole {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Integer id;
	
	@Column(name = "USERID")
	private Integer userId;

	@Column(name = "ROLEID")
	private Integer roleId;
	
	@Column(name = "CREATEDATE")
	private Date createDate;
	
	@Column(name = "UPDATEDATE")
	private Date updateDate;
	
	@Column(name = "ACTIVEFLAG")
	private boolean activeFlag;

	@ToString.Exclude
	@ManyToOne
	@JsonIgnore
    @JoinColumn(name = "USERID", referencedColumnName = "ID", insertable = false, updatable = false)
    private User user;
	@ToString.Exclude
	@ManyToOne
	@JsonIgnore
    @JoinColumn(name = "ROLEID", referencedColumnName = "ID", insertable = false, updatable = false)
    private Role role;
	
}
