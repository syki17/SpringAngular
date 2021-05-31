package com.jakub.ecommerce.dao;


import com.jakub.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product,Long> {
    //Query method example below - SELECT * FROM product where category_id=?
    Page<Product> findByCategoryId(@RequestParam("id") Long id, Pageable pageable);
}
