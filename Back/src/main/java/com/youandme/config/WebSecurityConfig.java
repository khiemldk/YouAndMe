package com.youandme.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.rememberme.InMemoryTokenRepositoryImpl;
import org.springframework.security.web.authentication.rememberme.PersistentTokenRepository;
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {



    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private AuthEntryPointJwt UnauthEntryPointJwt;


    @Bean
    public BCryptPasswordEncoder passwordEncoder(){
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        return bCryptPasswordEncoder;
    }
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception{
        /*auth.inMemoryAuthentication().withUser("nlendon0@cafepress.com").password("TXvSyRyyYI").roles("ROLE_USER");
        auth.inMemoryAuthentication().withUser("dbransom1@netscape.com").password("IH62uh0").roles("ROLE_USER, ROLE_ADMIN");*/
        //????y l?? object c???a Spring, n?? n???m gi??? th??ng tin quan tr???ng nh?? Username n??y l?? ai trong h??? th???ng , UserName n??y c?? quy???n g??.
        auth. userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
    }

    @Bean
    public AuthTokenFilter authTokenFilter(){
        return new AuthTokenFilter();
    }
    @Override
    protected void configure(HttpSecurity http) throws Exception{
        // //CSRF ( Cross Site Request Forgery) l?? k?? thu???t t???n c??ng b???ng c??ch s??? d???ng quy???n ch???ng th???c c???a ng?????i s??? d???ng ?????i v???i 1 website kh??c
        http.csrf().disable();
        // C??c trang kh??ng y??u c???u login nh?? v???y ai c??ng c?? th??? v??o ???????c admin hay user ho???c guest c?? th??? v??o c??c trang
        http.authorizeRequests().antMatchers("/" ,"/login","/logout").permitAll();
        // Trang /userInfo y??u c???u ph???i login v???i vai tr?? ROLE_USER ho???c ROLE_ADMIN.
        // N???u ch??a login, n?? s??? redirect t???i trang /login.sau M??nh dung hasAnyRole ????? cho ph??p ai ???????c quy???n v??o
        // 2  ROLE_USER v?? ROLEADMIN th?? ta l???y t??? database ra c??i m?? m??nh ch??n v?? ??? b?????c 1 (chu???n b??? database)
        http.authorizeRequests().antMatchers("/test").access("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')");
        // Trang ch??? d??nh cho ADMIN
        http.authorizeRequests().antMatchers("/test").access("hasRole('ROLE_ADMIN')");
        // Khi ng?????i d??ng ???? login, v???i vai tr?? user .
        // Nh??ng c??? ??  truy c???p v??o trang admin
        // Ngo???i l??? AccessDeniedException s??? n??m ra.
        // ??? ????y m??nh t???o th??m m???t trang web l???i t??n 403.html (m???i ng?????i c?? th??? t???o b???t c??? t??n n??o kh
        http.authorizeRequests().and().exceptionHandling().accessDeniedPage("/403");
        // C???u h??nh cho Login Form.
        http.authorizeRequests().and().formLogin()
                .loginProcessingUrl("/loginYouAndMe")
                    .loginPage("/login")
                .defaultSuccessUrl("/home") //????y Khi ????ng nh???p th??nh c??ng th?? v??o trang n??y. userAccountInfo s??? ???????c khai b??o trong controller ????? hi???n th??? trang view t????ng ???ng
                .failureUrl("/login?/error=true") //Khi ????ng nh???p sai username v?? password th?? nh???p l???i
                .usernameParameter("email") //tham s??? n??y nh???n t??? form login ??? b?????c 3 c?? input  name='username'
                .passwordParameter("pass") //tham s??? n??y nh???n t??? form login ??? b?????c 3 c?? input  name='password'
                 // C???u h??nh cho Logout Page. Khi logout m??nh tr??? v??? trang
                .and().logout().logoutUrl("/logout").logoutSuccessUrl("/logoutSuccessor");
        // C???u h??nh Remember Me. ??? form login b?????c 3, ta c?? 1 n??t remember me. N???u ng?????i d??ng tick v??o ???? ta s??? d??ng cookie l??u l???i trong 24h

        http.authorizeRequests().and()
                .rememberMe().tokenRepository(this.persistentTokenRepository())
                .tokenValiditySeconds(1*24*60*60); //24h
        http.addFilterBefore(authTokenFilter() , UsernamePasswordAuthenticationFilter.class);

    }

    @Bean
    public PersistentTokenRepository persistentTokenRepository() {
        InMemoryTokenRepositoryImpl memoryTokenRepository = new InMemoryTokenRepositoryImpl();
        return  memoryTokenRepository;
    }
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws  Exception{
        return super.authenticationManagerBean();
    }
}
