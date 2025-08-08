package com.badge.democrud.backend.demo_crud_backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String about;
    private String address;
    private Long age;
    private String balance;
    private String company;
    private String email;
    @Column(name = "eye_color")
    private String eyeColor;
    private String gender;
    @Column(name = "is_active")
    private Boolean isActive;
    private Double latitude;
    private Double longitude;
    private String name;
    private String phone;
    private String picture;
    private String registered;
}