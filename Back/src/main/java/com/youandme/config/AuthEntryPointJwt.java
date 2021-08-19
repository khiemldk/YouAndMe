package com.youandme.config;

import org.slf4j.LoggerFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import org.slf4j.Logger;
import org.springframework.stereotype.Component;

//Xử lý ngoại lệ về xác thực (Authencation)
@Component
public class AuthEntryPointJwt implements AuthenticationEntryPoint {
    private static final Logger logger = LoggerFactory.getLogger(AuthEntryPointJwt.class);
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        logger.error("UnAuthorized error :{}", authException.getMessage());
        //HttpServletResponse.SC_UNAUTHORIZED chính là 401, cho biết yêu cầu cần xác thực
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED ,"Error : Unauthorized ");
    }
}
