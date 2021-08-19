package com.youandme.service;

import com.youandme.dao.UserRoleDAO;
import com.youandme.entities.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserRoleService {


    @Autowired
    private UserRoleDAO userRoleDAO;

    public List<UserRole> getListRoleIdByUserId(int userId){
        return userRoleDAO.findByProp("userId", userId);
    }

    public void insertUserRole(UserRole userRole){
        userRoleDAO.insert(userRole);
    }
}
