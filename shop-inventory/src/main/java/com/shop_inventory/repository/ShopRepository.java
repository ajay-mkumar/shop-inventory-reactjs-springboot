package com.shop_inventory.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.shop_inventory.DTO.ShopDtoResponse;
import com.shop_inventory.model.Shop;

public interface ShopRepository extends JpaRepository<Shop, Long> {
    @Query("SELECT new com.shop_inventory.DTO.ShopDtoResponse(" +
       "s.id, s.user.id, COALESCE(SUM(p.stockQuantity), 0), s.shop) " +
       "FROM Shop s LEFT JOIN Product p ON s.id = p.shop.id " +
       "WHERE s.user.id = :userId " +
       "GROUP BY s.id, s.shop, s.user.id")
    List<ShopDtoResponse> findByUserId(Long userId);
}
