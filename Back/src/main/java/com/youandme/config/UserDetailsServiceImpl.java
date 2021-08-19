package com.youandme.config;

import com.youandme.controller.BaseController;
import com.youandme.dto.UserDetailsImpl;
import com.youandme.entities.Role;
import com.youandme.entities.User;
import com.youandme.entities.UserRole;
import com.youandme.service.RoleService;
import com.youandme.service.UserRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class UserDetailsServiceImpl extends BaseController implements UserDetailsService {

    @Autowired
    UserRoleService userRoleService;

    @Autowired
    RoleService roleService;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        // đầu tiên mình query xuống database xem có user  đó không
        User user = getUserFromEmail(email);
        if(user == null){
            System.out.println("user not found ! " + email);
            throw new UsernameNotFoundException("User " + email + "was not found in database");
        }
        List<UserRole> listRoleId =  userRoleService.getListRoleIdByUserId(user.getId());
        List<Integer> roleID = new ArrayList<>();

        for (UserRole info: listRoleId) {
            roleID.add(info.getRoleId());
        }
        List<Role>  roleList =  roleService.getListRoleByRoleId(roleID);

        // Khi đã có user rồi thì mình query xem user đó có những quyền gì (Admin hay User)
        // [ROLE_USER, ROLE_ADMIN,..]

        //Cuối cùng mình tạo đối tượng UserDetails của Spring và mình cung cấp cá thông số như tên , password và quyền
        // Đối tượng userDetails sẽ chứa đựng các thông tin cần thiết về user từ đó giúp Spring Security quản lý được phân quyền như ta đã
        // cấu hình trong bước 4 method configure

        return UserDetailsImpl.build(user ,roleList);
    }

}
