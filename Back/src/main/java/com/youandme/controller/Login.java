package com.youandme.controller;

import com.nimbusds.jose.proc.SecurityContext;
import com.youandme.config.JwtUtils;
import com.youandme.dto.UserDetailsImpl;
import com.youandme.entities.Role;
import com.youandme.entities.User;
import com.youandme.entities.UserRole;
import com.youandme.request.LoginRequest;
import com.youandme.request.UserRequest;
import com.youandme.response.BaseResponse;
import com.youandme.response.JwtResponse;
import com.youandme.response.UserResponse;
import com.youandme.service.RoleService;
import com.youandme.service.UserRoleService;
import com.youandme.until.CONSTANTS;
import com.youandme.until.Error;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.ObjectUtils;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping("/api/auth")
public class Login extends BaseController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    PasswordEncoder encoder;
    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    RoleService roleService;

    @Autowired
    UserRoleService userRoleService;

    /**
     * login
     * @param loginRequest
     * @return
     */
    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Validated @RequestBody LoginRequest loginRequest ){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail() ,loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);


        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles =userDetails.getAuthorities().stream().map(item -> item.getAuthority())
                .collect(Collectors.toList());
        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getEmail(),
                roles));
    }

    @PostMapping("/regist")
    public UserResponse registerUser(@Validated @RequestBody UserRequest userRequest){
        // check userName da ton tai trong database hay chua
        if(!userService.emailIsExit(userRequest.getEmail())){
            return new UserResponse(Error.VALID_EMAIL);
        }
        // create User
        User user = UserRequest.convertFromUserRequest(userRequest);

        user.setPass(encoder.encode(user.getPass()));
        // regist user
        userService.insertUser(user);

        Set<Integer> strRole = userRequest.getRole();

        List<UserRole> userRoles = new ArrayList<>();
        for (Integer roleId: strRole) {
            UserRole userRole = new UserRole();
            userRole.setActiveFlag(CONSTANTS.ACTIVEFlG);
            userRole.setCreateDate(new Date());
            userRole.setRoleId(roleId);
            userRole.setUserId(user.getId());
            userRoles.add(userRole);
            userRoleService.insertUserRole(userRole);
        }
        return new UserResponse(Error.SUCCESS);
    }





}
