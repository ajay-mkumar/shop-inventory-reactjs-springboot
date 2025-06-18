package com.shop_inventory.service;

import java.util.List;
import java.util.Optional;

import com.shop_inventory.DTO.ShopDtoResponse;

public interface ShopService {
    public List<ShopDtoResponse> getShops();

    public ShopDtoResponse addShop(String username, ShopDtoResponse shopDto);

    public ShopDtoResponse updateShop(Long id, String username, ShopDtoResponse shopDto);

    public List<ShopDtoResponse> getAllShopsForUser(String username);

    public Optional<ShopDtoResponse> getShopById(Long id);

    public void deleteShop(Long id, String Username);
}
