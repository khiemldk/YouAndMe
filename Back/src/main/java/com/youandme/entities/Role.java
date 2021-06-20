package com.youandme.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;

@Data
@Entity
public class Role {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Integer id;
	
	
	@Column(name = "NAME")
	private String name;
	
	@Column(name = "DESCRIPTION")
	private int description;
	
	@Column(name = "CREATEDATE")
	private Date createDate;
	@Column(name = "UPDATEDATE")
	private Date updateDate;
	@Column(name = "ACTIVEFLAG")
	private boolean activeFlag;
	
}
