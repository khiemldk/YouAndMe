package com.youandme.config;

import com.youandme.dto.UserDetailsImpl;

import io.jsonwebtoken.*;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtils {
    private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);

    // Đoạn JWT_SECRET này là bí mật, chỉ có phía server biết
    private final String JWT_SECRET = "youAndMe";

    //Thời gian có hiệu lực của chuỗi jwt
    private final long JWT_EXPIRATION = 604800000L;
    // Tạo ra jwt từ thông tin user
    public String generateJwtToken(Authentication authentication){

        Date now =  new Date();
        Date expiryDate = new Date(now.getTime() +JWT_EXPIRATION);

        UserDetailsImpl userPrincipal = (UserDetailsImpl) authentication.getPrincipal();

        // Tạo chuỗi json web token từ id của user.
        return Jwts.builder()
                .setSubject(userPrincipal.getUsername())
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512 , JWT_SECRET)
                .compact();
    }
    // lay thong tin user tu jwt
    public String getUserNameFromJwtToken(String token){
        return Jwts.parser().setSigningKey(JWT_SECRET).parseClaimsJws(token).getBody().getSubject();
    }

    public boolean validateJwtToken(String authToken){
        try {
            Jwts.parser().setSigningKey(JWT_SECRET).parseClaimsJws(authToken);
            return true;
        }catch (SignatureException e){
            logger.error("Invalid Jwt signature :{}",e.getMessage());
        }catch (MalformedJwtException e){
            logger.error("Invalid Jwt token : {}", e.getMessage());
        }catch (UnsupportedJwtException e){
            logger.error("Jwt token is unsupported : {}" , e.getMessage());
        }catch (IllegalArgumentException e){
            logger.error("JWT claims string is empty: {}", e.getMessage());
        }
        return false;
    }


}
