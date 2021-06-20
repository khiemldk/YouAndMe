package com.youandme.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ActivityRequest extends PageRequest {
	private Integer userId;
	
	public ActivityRequest (
	@JsonProperty("userId") Integer userId,
	@JsonProperty("pageSize") Integer pageSize,
	@JsonProperty("pageNumber") Integer pageNumber
	) {
		super(pageSize, pageNumber);
		this.userId = userId;
	}
}
