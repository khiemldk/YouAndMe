package com.youandme.daoimple;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import java.util.StringJoiner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.youandme.dao.BaseDAO;

@Repository
@Transactional(rollbackFor = Exception.class)
public class BaseImple<E> implements BaseDAO<E> {

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public List<E> getAll() {
		StringBuilder query = new StringBuilder("");
		query.append("from ").append(getGenericName()).append(" as model where model.activeFlag = 1");
		Session ss = sessionFactory.getCurrentSession();
		Query<E> res = ss.createQuery(query.toString());
		return res.list();
	}

	public String getGenericName() {
		String s = getClass().getGenericSuperclass().toString();
		Pattern pattern = Pattern.compile("\\<(.*?)\\>");
		Matcher matcher = pattern.matcher(s);
		String generic = "null";
		if (matcher.find()) {
			generic = matcher.group(1);
		}
		return generic;
	}

	@Override
	public void update(E instance) {
		Session ss = sessionFactory.getCurrentSession();
		ss.merge(instance);
		
	}

	@Override
	public void insert(E instance) {
		Session ss = sessionFactory.getCurrentSession();
		ss.persist(instance);
		ss.clear();
		
	}

	@Override
	public void delete(E instance) {
		Session ss = sessionFactory.getCurrentSession();
		ss.clear();
		ss.delete(instance);
	}

	@Override
	public List<E> findByProp(String name, Object value) {
		StringBuilder query = new StringBuilder("");
		query.
			append("from ").
			append(getGenericName()).
			append(" as model where model.activeFlag = 1 and model.").
			append(name).
			append(" = '").
			append(value).append("'");
		;
		Session ss  = sessionFactory.getCurrentSession();
		
		Query<E> result = ss.createQuery(query.toString());
		return result.list();
	}

	@Override
	public List<E> findByProps(Map<String, Object> maps) {
		StringBuilder query = new StringBuilder("");
		query.
			append("from ").
			append(getGenericName()).
			append(" as model where model.activeFlag = 1 and ");
		for(String key : maps.keySet()) {
			if (maps.get(key) != null) {
				query.append(key).append(" = '").append(maps.get(key)).append("'");
				query.append(" and ");
			}
		}
		
		query.delete(query.length()-5, query.length());
		Session ss  = sessionFactory.getCurrentSession();
		Query<E> result = ss.createQuery(query.toString());
		return result.list();
	}

	@Override
	public E findById(Class<E> e, Serializable id) {
		Session ss = sessionFactory.getCurrentSession();
		return ss.get(e, id);
	}

}
