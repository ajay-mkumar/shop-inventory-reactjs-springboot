package com.shop_inventory.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shop_inventory.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByShopId(Long id);
}
