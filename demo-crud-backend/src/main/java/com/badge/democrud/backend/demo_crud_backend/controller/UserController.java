package com.badge.democrud.backend.demo_crud_backend.controller;

import com.badge.democrud.backend.demo_crud_backend.model.User;
import com.badge.democrud.backend.demo_crud_backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/users")
@CrossOrigin(value = "http://localhost:4200")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping
    public Page<User> getUsers(Pageable pageable) {
        return service.getPaginatedUsers(pageable);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable long id){
        service.deleteUserById(id);
    }
}
