package com.shop_inventory.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.shop_inventory.DTO.ShopDtoResponse;
import com.shop_inventory.exception.UnAuthorizedException;
import com.shop_inventory.helper.ShopTransformer;
import com.shop_inventory.model.Shop;
import com.shop_inventory.model.User;
import com.shop_inventory.repository.ShopRepository;
import com.shop_inventory.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ShopServiceImpl implements ShopService {

    private final ShopRepository shopRepository;
    private final UserRepository userRepository;

    public List<ShopDtoResponse> getShops() {
        List<Shop> shops = shopRepository.findAll();

        return shops.stream().map(ShopTransformer::toShopDTO).collect(Collectors.toList());
    }

    public ShopDtoResponse addShop(String username, ShopDtoResponse shopDto) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("username not found"));

        Shop shop = Shop.builder()
                .shop(shopDto.getShop())
                .user(user)
                .build();

        Shop savedShop = shopRepository.save(shop);

        return ShopTransformer.toShopDTO(savedShop);
    }

    public ShopDtoResponse updateShop(Long id, String username, ShopDtoResponse shopDto) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("username not found"));

        Shop shop = shopRepository.findById(id).orElseThrow(() -> new RuntimeException("no shop found"));

        if (!shop.getUser().getId().equals(user.getId())) {
            throw new UnAuthorizedException("you're not authorized to do this");
        }

        shop.setShop(shopDto.getShop());
        Shop update = shopRepository.save(shop);

        return ShopTransformer.toShopDTO(update);
    }

    public List<ShopDtoResponse> getAllShopsForUser(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    
        List<ShopDtoResponse> shops = shopRepository.findByUserId(user.getId());
    
        return shops;
    }

    public Optional<ShopDtoResponse> getShopById(Long id) {
        Optional<Shop> shop = shopRepository.findById(id);

        return shop.map(ShopTransformer::toShopDTO);
    }
    

    public void deleteShop(Long id, String username) {
        Shop shop = shopRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("No shop found"));

        if (!shop.getUser().getUsername().equals(username)) {
            throw new UnAuthorizedException("you are not authorized do this action");
        }

        shopRepository.delete(shop);
    }
}
