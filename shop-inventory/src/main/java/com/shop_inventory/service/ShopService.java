package com.shop_inventory.service;

import java.util.List;

import com.shop_inventory.DTO.ShopDtoResponse;

public interface ShopService {
    public List<ShopDtoResponse> getShops();

    public ShopDtoResponse addShop(String username, ShopDtoResponse shopDto);

    public ShopDtoResponse updateShop(Long id, String username, ShopDtoResponse shopDto);

    public List<ShopDtoResponse> getAllShopsForUser(String username);

    public void deleteShop(Long id, String Username);
}
