package com.youandme.daoimple;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.youandme.dao.ActivityDAO;
import com.youandme.entities.Activity;

@Repository
@Transactional(rollbackFor = Exception.class)
public class ActivityImple extends BaseImple<Activity> implements ActivityDAO<Activity>{

}
