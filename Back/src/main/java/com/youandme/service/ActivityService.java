package com.youandme.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.youandme.dao.ActivityDAO;
import com.youandme.entities.Activity;

@Service
public class ActivityService {
	@Autowired
	private ActivityDAO<Activity> activityDAO;
	
	public List<Activity> getAllActivity(String name, Object value) {
		return activityDAO.findByProp(name, value);
	}
	
}
