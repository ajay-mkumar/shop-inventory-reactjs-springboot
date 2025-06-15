package com.shop_inventory.service;

import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.shop_inventory.DTO.UserDto;
import com.shop_inventory.model.User;

public interface UserService extends UserDetailsService {
    public User register(User user);

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;

    public Optional<UserDto> getUser(Long id);
}
