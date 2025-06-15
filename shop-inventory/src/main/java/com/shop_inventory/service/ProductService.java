package com.shop_inventory.service;

import java.util.List;

import com.shop_inventory.DTO.ProductRequestDto;

public interface ProductService {
    public List<ProductRequestDto> getProducts(Long id);

    public ProductRequestDto createProducts(String username, ProductRequestDto productDto);

    public ProductRequestDto updateProducts(String username, ProductRequestDto productDto);

}
