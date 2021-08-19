package com.youandme.daoimple;

import com.youandme.dao.RoleDAO;
import com.youandme.entities.Role;
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
public class RoleImple extends BaseImple<Role> implements RoleDAO<Role> {
    @Autowired
    private SessionFactory sessionFactory;
    @Override
    public List<Role> findUserRoleByUserId(List<Integer> listRoleID) {
        String listRole  = convertFromArray(listRoleID);
        StringBuilder query = new StringBuilder("");
        query.
                append("from ").
                append(getGenericName()).
                append(" as model where model.activeFlag = 1 and ").append(" model.id in (")
                .append(listRole).append(")");
        Session ss  = sessionFactory.getCurrentSession();
        Query<Role> result = ss.createQuery(query.toString());
        return result.list();
    }
    public String convertFromArray(List<Integer> array){
        StringJoiner joiner = new StringJoiner(",");
        for (Integer info: array) {
            joiner.add(info.toString());
        }
        return joiner.toString();
    }
}
