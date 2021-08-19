package com.youandme.daoimple;

import com.youandme.dao.UserRoleDAO;
import com.youandme.entities.UserRole;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.StringJoiner;

@Repository
@Transactional(rollbackFor = Exception.class)
public class UserRoleImple extends BaseImple<UserRole> implements UserRoleDAO<UserRole> {
}
