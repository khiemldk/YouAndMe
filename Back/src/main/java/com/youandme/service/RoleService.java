package com.youandme.service;

import com.youandme.dao.RoleDAO;
import com.youandme.entities.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class RoleService {

    @Autowired
    private RoleDAO<Role> roleDAO;

    public List<Role> getListRoleByRoleId(List<Integer> listRole){
        return roleDAO.findUserRoleByUserId(listRole);
    }

    public Role getRoleById(Integer roleId){
        return roleDAO.findById(Role.class,roleId);
    }


}
