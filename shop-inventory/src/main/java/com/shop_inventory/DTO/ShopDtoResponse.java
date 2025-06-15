package com.shop_inventory.DTO;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ShopDtoResponse {
    private Long id;
    private Long user;
    private Long totalProducts;
    private String shop;
}
