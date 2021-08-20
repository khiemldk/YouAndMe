package com.youandme.request;

import com.youandme.until.CONSTANTS;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PageRequest extends BaseRequest{
	private Integer pageSize, pageNumber;
	
	public PageRequest(Integer pageSize, Integer pageNumber) {
		super();
		this.pageSize = (pageSize == null || pageSize == 0) ? CONSTANTS.PAGE_SIZE : pageSize;
		this.pageNumber = pageNumber == null ? CONSTANTS.PAGE_NUMBER : pageNumber;
	}
}
