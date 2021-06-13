package com.youandme.dao;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

public interface BaseDAO<E> {
	public List<E> getAll();
	public E findById(Class<E> e, Serializable id);
	public void update(E instance);
	public void insert(E instance);
	public void delete(E instance);
	public List<E> findByProp(String name, Object value);
	public List<E> findByProps(Map<String, Object> maps);
	
}
