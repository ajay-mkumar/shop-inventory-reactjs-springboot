package com.shop_inventory.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shop_inventory.DTO.ProductRequestDto;
import com.shop_inventory.service.ProductService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/product")
public class ProductController {
    private final ProductService productService;

    @PostMapping("/create")
    public ResponseEntity<ProductRequestDto> addProduct(@RequestBody ProductRequestDto productDto, Authentication authentication) {
        String username = authentication.getName();
        ProductRequestDto created = productService.createProducts(username, productDto);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }
}
