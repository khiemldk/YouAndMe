package com.youandme.dao;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

public interface BaseDAO<E> {
	 List<E> getAll();
	 E findById(Class<E> e, Serializable id);
	 void update(E instance);
	 void insert(E instance);
	 void delete(E instance);
	 List<E> findByProp(String name, Object value);
	 List<E> findByProps(Map<String, Object> maps);
}
