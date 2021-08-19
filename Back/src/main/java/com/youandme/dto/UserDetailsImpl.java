package com.youandme.dto;

import com.youandme.entities.Role;
import com.youandme.entities.User;
import com.youandme.service.RoleService;
import com.youandme.service.UserRoleService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

@Data
public class UserDetailsImpl implements UserDetails {

    @Autowired
    private static UserRoleService userRoleService;

    @Autowired
    private static RoleService roleService;

    private static final long serialVersionID = 1L;
    private Integer id;
    private String email;
    private String pass;

    private Collection<? extends GrantedAuthority> authorities;

    public UserDetailsImpl(Integer id, String email, String pass, Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.email = email;
        this.pass = pass;
        this.authorities = authorities;
    }

    public static UserDetailsImpl build (User user , List<Role> roleList){
        // get List RoleID by User Id
        List<GrantedAuthority> authorities = roleList.stream().map(role -> new SimpleGrantedAuthority(role.getName()))
                .collect(Collectors.toList());
        return new UserDetailsImpl(user.getId(),user.getEmail(), user.getPass(),authorities);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return pass;
    }

    @Override
    public String getUsername() {
        return null;
    }


    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
    
    @Override
    public boolean equals(Object o){
        if(this == o){
            return true;
        }
        if(o == null || getClass() != o.getClass()){
            return  false;
        }
        UserDetailsImpl user = (UserDetailsImpl) o;
        return Objects.equals(id, user.id);
    }

}
