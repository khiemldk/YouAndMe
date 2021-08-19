package com.youandme.dto;

import com.youandme.entities.User;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

import java.util.List;

@Data
public class UserDTO {
    private String email;
    private String pass;
    List<GrantedAuthority> grantList;

    public UserDTO() {
    }

    public UserDTO(String email, String pass, List<GrantedAuthority> grantList) {
        this.email = email;
        this.pass = pass;
        this.grantList = grantList;
    }
    public static UserDTO convertFromUserEntity(User user){
        UserDTO userDTO = new UserDTO();
        userDTO.setEmail(user.getEmail());
        userDTO.setPass(user.getPass());
        return userDTO;
    }

}
