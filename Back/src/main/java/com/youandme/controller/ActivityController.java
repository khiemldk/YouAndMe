package com.youandme.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.youandme.dto.ActivityDTO;
import com.youandme.entities.Activity;
import com.youandme.entities.User;
import com.youandme.request.ActivityRequest;
import com.youandme.response.ActivityResponse;
import com.youandme.response.BaseResponse;
import com.youandme.until.Error;

@RestController
public class ActivityController extends BaseController{
	
	@PostMapping("/getActivity")
	public BaseResponse getActivity(@RequestBody ActivityRequest request) {
		if (request != null) {
			if (request.getUserId() != null) {
				List<ActivityDTO> list = getAllActivity("userId", request.getUserId())
						.stream()
						.map(c -> convertActivityDTO(c))
						.collect(Collectors.toList());
				Page<ActivityDTO> page = setUpPage(list, request.getPageSize(), request.getPageNumber());
				
				return new ActivityResponse(Error.SUCCESS,page.getContent(),page.getTotalPages(), list.size());
			} else {
				return new ActivityResponse(Error.ID_NOT_FOUND, new ArrayList(),0,0);
			}
		}
		return new ActivityResponse(Error.UNKNOWN, new ArrayList(),0,0);
	}
}
