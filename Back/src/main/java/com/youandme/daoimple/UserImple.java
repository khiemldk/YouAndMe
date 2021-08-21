package com.youandme.daoimple;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.youandme.dao.UserDAO;
import com.youandme.entities.User;

import java.util.List;

@Repository
@Transactional(rollbackFor = Exception.class)
public class UserImple extends BaseImple<User> implements UserDAO<User>{

    @Autowired
    SessionFactory sessionFactory;
    @Override
    public User findByEmail(String name, Object value) {
        StringBuilder query = new StringBuilder("");
        query.append(" from ")
                .append(getGenericName())
                .append(" as model where model.activeFlag = 1 and model.email")
                .append("= '").append(value).append("'");
        Session ss  = sessionFactory.getCurrentSession();
        Query<User> res = ss.createQuery(query.toString());
        return  res.uniqueResult();
    }

    @Override
    public List<User> getListFriendsByUserId(Integer userID) {
        StringBuilder query = new StringBuilder("");
        query.append(" from com.youandme.entities.User as a ")
                .append(" where a.activeFlag = 1 ")
                .append("and a.Id in (select f.userId2 from com.youandme.entities.Friend as f where f.userId = ")
                .append(userID).append(")");
        Session ss  = sessionFactory.getCurrentSession();
        Query<User> res = ss.createQuery(query.toString());
        return  res.list();
    }
}
