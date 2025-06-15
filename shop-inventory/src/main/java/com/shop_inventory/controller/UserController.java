package com.shop_inventory.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shop_inventory.DTO.ShopDtoResponse;
import com.shop_inventory.service.ShopService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    private final ShopService shopService;

    @GetMapping("/me")
    public String getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if(authentication!=null && authentication.isAuthenticated()) {
            return authentication.getName();
        }
        return null;
    }
    
    @GetMapping("/shop")
    public ResponseEntity<List<ShopDtoResponse>> getShops(Authentication authentication) {
        String username = authentication.getName();
        List<ShopDtoResponse> shops = shopService.getAllShopsForUser(username);
        return ResponseEntity.ok(shops);
    }
}
