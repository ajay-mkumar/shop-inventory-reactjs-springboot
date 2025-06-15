package com.shop_inventory.controller;


import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shop_inventory.DTO.ProductRequestDto;
import com.shop_inventory.DTO.ShopDtoResponse;
import com.shop_inventory.service.ProductService;
import com.shop_inventory.service.ShopService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/shop")
public class ShopController {

    private final ShopService shopService;
    private final ProductService productService;

    @GetMapping("/{id}")
    public ResponseEntity<List<ProductRequestDto>> getProductsByShopId(@PathVariable Long id) {
        List<ProductRequestDto> products = productService.getProducts(id);

        return new ResponseEntity<List<ProductRequestDto>>(products, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<ShopDtoResponse> addShop(@RequestBody ShopDtoResponse shopDto, Authentication authentication) {
        String username = authentication.getName();
        ShopDtoResponse shop = shopService.addShop(username, shopDto);
        return ResponseEntity.ok(shop);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ShopDtoResponse> updateShop(@PathVariable Long id, @RequestBody ShopDtoResponse shopDto, Authentication authentication) {
        String username = authentication.getName();
        ShopDtoResponse updatedShop = shopService.updateShop(id, username, shopDto);
        return new ResponseEntity<>(updatedShop, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteShop(@PathVariable Long id, Authentication authentication) {
        String username = authentication.getName();
        shopService.deleteShop(id, username);
        return ResponseEntity.ok("shop deleted successfully");
    }
}
