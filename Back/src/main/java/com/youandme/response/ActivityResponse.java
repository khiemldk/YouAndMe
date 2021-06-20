package com.youandme.response;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.youandme.dto.ActivityDTO;
import static com.youandme.until.CONSTANTS.RESULT;
import com.youandme.until.Error;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class ActivityResponse extends BaseResponse{
	@JsonProperty(RESULT)
	private List<ActivityDTO> activities;
	private int totalPage;
    private long totalActivity;
	public ActivityResponse(
		Error error,
		List<ActivityDTO> activities,
		int totalPage,
		int totalActivity
	) {
		super(error);
		this.activities = activities;
		this.totalPage = totalPage;
		this.totalActivity = totalActivity;
	}
}
