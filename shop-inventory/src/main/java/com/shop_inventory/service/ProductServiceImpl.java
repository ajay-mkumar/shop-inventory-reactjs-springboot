package com.shop_inventory.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.shop_inventory.DTO.ProductRequestDto;
import com.shop_inventory.exception.UnAuthorizedException;
import com.shop_inventory.helper.ShopTransformer;
import com.shop_inventory.model.Product;
import com.shop_inventory.model.Shop;
import com.shop_inventory.model.User;
import com.shop_inventory.repository.ProductRepository;
import com.shop_inventory.repository.ShopRepository;
import com.shop_inventory.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;
    private final UserRepository userRepository;
    private final ShopRepository shopRepository;

    public List<ProductRequestDto> getProducts(Long id) {
        List<Product> products = productRepository.findByShopId(id);

        return products.stream().map(ShopTransformer::toProductDto).collect(Collectors.toList());
    }

    public ProductRequestDto createProducts(String username, ProductRequestDto productDto) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("username is not found"));

        Shop shop = shopRepository.findById(productDto.getShopId())
                .orElseThrow(() -> new RuntimeException("shop not found"));

        if (!shop.getUser().getId().equals(user.getId())) {
            throw new UnAuthorizedException("your are not authorized to do this");
        }

        Product product = Product.builder()
                .product(productDto.getProduct())
                .price(productDto.getPrice())
                .stockQuantity(productDto.getStockQuantity())
                .user(user)
                .shop(shop)
                .build();

        Product savedProduct = productRepository.save(product);
        return ShopTransformer.toProductDto(savedProduct);
    }

    public ProductRequestDto updateProducts(String username, ProductRequestDto productDto) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("username is not found"));

        Product exisitingProduct = productRepository.findById(productDto.getId()).orElseThrow(() -> new RuntimeException(""));
        
        if (!exisitingProduct.getUser().getId().equals(user.getId())) {
            throw new UnAuthorizedException("your are not authorized to do this");
        }

        exisitingProduct.setProduct(productDto.getProduct());
        exisitingProduct.setPrice(productDto.getPrice());
        exisitingProduct.setStockQuantity(productDto.getStockQuantity());

        Product updateProduct = productRepository.save(exisitingProduct);

        return ShopTransformer.toProductDto(updateProduct);
    }
}
