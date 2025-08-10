package com.badge.democrud.backend.demo_crud_backend.service;

import com.badge.democrud.backend.demo_crud_backend.exception.NotFoundException;
import com.badge.democrud.backend.demo_crud_backend.mapper.UserMapper;
import com.badge.democrud.backend.demo_crud_backend.model.User;
import com.badge.democrud.backend.demo_crud_backend.model.dto.UserDTO;
import com.badge.democrud.backend.demo_crud_backend.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public UserService(UserRepository userRepository, UserMapper userMapper) {
        this.userMapper = userMapper;
        this.userRepository = userRepository;
    }

    public Page<UserDTO> getPaginatedUsers(Pageable pageable) {
        return userRepository.findAllWithPagination(pageable)
                .map(userMapper::userToUserDto);
    }

    @Transactional
    public void deleteUserById(long id){
        userRepository.findById(id)
                .ifPresentOrElse(userRepository::delete,
                        () -> { throw new RuntimeException("User not found with id: " + id); });
    }

    @Transactional
    public User updateUser(long id, UserDTO dto) throws NotFoundException {

        var user = userRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("User not found with id: " + id));
        userMapper.updateUserFromDto(dto, user);
        return user;
    }
}
