package com.jakub.ecommerce.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlIDREF;
import java.util.Set;

@Entity
@Table(name="product_category")

// @Data -- known bug when making use of relationship such as one to many and many to one

@Getter
@Setter
public class ProductCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="category_name")
    private String categoryName;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "category")
    private Set<Product> products;
}
