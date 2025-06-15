package com.shop_inventory.helper;

import java.util.stream.Collectors;

import com.shop_inventory.DTO.ProductRequestDto;
import com.shop_inventory.DTO.ShopDtoResponse;
import com.shop_inventory.DTO.UserDto;
import com.shop_inventory.model.Product;
import com.shop_inventory.model.Shop;
import com.shop_inventory.model.User;

public class ShopTransformer {

  public static UserDto toUserDto(User user) {
    UserDto dto = new UserDto();
    dto.setId(user.getId());
    dto.setUsername(user.getUsername());
    dto.setEmail(user.getEmail());
    dto.setRole(user.getRole());
    dto.setShops(user.getShops().stream()
        .map(ShopTransformer::toShopDTO)
        .collect(Collectors.toList()));
    return dto;
  }

  public static ShopDtoResponse toShopDTO(Shop shop) {
    return new ShopDtoResponse(shop.getId(),
        shop.getUser().getId(),
        0L,
        shop.getShop());
  }

  public static ProductRequestDto toProductDto(Product product) {
    return new ProductRequestDto(product.getShop().getId(),
    product.getId(),
    product.getProduct(),
    product.getPrice(),
    product.getStockQuantity());
  }
}
