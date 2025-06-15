package com.shop_inventory.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductRequestDto {
    private Long shopId;
    private Long id;
    private String product;
    private Double price;
    private Long stockQuantity;
}
