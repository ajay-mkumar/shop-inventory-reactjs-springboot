package com.shop_inventory.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.*;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shop_inventory.model.User;
import com.shop_inventory.security.JwtService;
import com.shop_inventory.service.UserService;
import com.shop_inventory.DTO.LoginDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final UserService userService;

    @PostMapping("/register")
    public String register(@RequestBody User request) {
        User user = userService.register(request);
        return jwtService.generateToken(user.getUsername());
    }

    @PostMapping("/login")
    public ResponseEntity<LoginDto> login(@RequestBody User user) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
        UserDetails userDetails = userService.loadUserByUsername(user.getUsername());
        String token = jwtService.generateToken(userDetails.getUsername());
        String username = userDetails.getUsername();
        LoginDto response = new LoginDto(token, username);
        return ResponseEntity.ok(response);
    }
}
