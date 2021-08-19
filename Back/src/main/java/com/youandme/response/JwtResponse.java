package com.youandme.response;

import lombok.Data;

import java.util.List;
@Data
public class JwtResponse {
    private String token;
    private String type ="youAndMe";
    private Integer id;
    private String email;
    private List<String> roles;

    public JwtResponse(String token, String type, Integer id, String userName, String email, List<String> roles) {
        this.token = token;
        this.type = type;
        this.id = id;
        this.email = email;
        this.roles = roles;
    }

    public JwtResponse(String token, Integer id, String email, List<String> roles) {
        this.token = token;
        this.id = id;
        this.email = email;
        this.roles = roles;
    }
}
