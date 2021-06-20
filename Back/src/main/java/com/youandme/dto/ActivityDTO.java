package com.youandme.dto;

import java.util.Date;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ActivityDTO {
	private int type;
	private Date createDate;
}
