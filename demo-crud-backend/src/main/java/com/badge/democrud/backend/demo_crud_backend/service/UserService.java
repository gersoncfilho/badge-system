package com.badge.democrud.backend.demo_crud_backend.service;

import com.badge.democrud.backend.demo_crud_backend.model.User;
import com.badge.democrud.backend.demo_crud_backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Page<User> getPaginatedUsers(Pageable pageable) {

        return userRepository.findAllWithPagination(pageable);
    }

    public void deleteUserById(long id){
        /*var user = userRepository.findById(id);
        if (user.isPresent()){
            User existingUser = user.get();
            existingUser.setIsActive(false);
            userRepository.save(existingUser);
        }*/
    }
}
