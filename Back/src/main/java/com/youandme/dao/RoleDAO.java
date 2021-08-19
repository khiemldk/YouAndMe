package com.youandme.dao;

import java.util.List;

public interface RoleDAO<E> extends BaseDAO<E>{
    List<E> findUserRoleByUserId(List<Integer> listRoleID);
}
