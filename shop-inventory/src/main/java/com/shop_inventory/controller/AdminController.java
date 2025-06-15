package com.shop_inventory.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shop_inventory.DTO.ShopDtoResponse;
import com.shop_inventory.DTO.UserDto;
import com.shop_inventory.service.ShopService;
import com.shop_inventory.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin")
public class AdminController {

    private final UserService userService;
    private final ShopService shopService;

    @GetMapping("users/{id}")
   public ResponseEntity<UserDto> getUser(@PathVariable Long id) {
    return userService.getUser(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
   }

    @GetMapping("/shops")
    public ResponseEntity<List<ShopDtoResponse>> getAllShops() {
        return ResponseEntity.ok(shopService.getShops());
    }

    // @GetMapping("/shops/{id}")
    // public ResponseEntity<List<ShopDtoResponse>> getShop(@PathVariable Long id)  {
    //     return ResponseEntity.ok(shopService.getAllShopsForUser(id));
    // }  
}
