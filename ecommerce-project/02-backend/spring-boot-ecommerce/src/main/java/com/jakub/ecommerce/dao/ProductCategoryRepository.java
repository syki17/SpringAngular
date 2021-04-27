package com.jakub.ecommerce.dao;

import com.jakub.ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category") // usually it will be created by adding an "s" to the end
public interface ProductCategoryRepository extends JpaRepository<ProductCategory,Long> {
}
