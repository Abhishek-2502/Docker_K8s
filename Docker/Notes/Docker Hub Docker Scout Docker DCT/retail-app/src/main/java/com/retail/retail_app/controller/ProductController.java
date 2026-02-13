package com.retail.retail_app.controller;
import com.retail.retail_app.model.Product;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @GetMapping
    public List<Product> getAllProducts() {
        return List.of(
                new Product(1, "Apple", 99.0),
                new Product(2, "Banana", 49.0)
        );
    }
}
