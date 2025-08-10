package com.badge.democrud.backend.demo_crud_backend.mapper;

import com.badge.democrud.backend.demo_crud_backend.model.User;
import com.badge.democrud.backend.demo_crud_backend.model.dto.UserDTO;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDTO userToUserDto(User user);
    User userDtoToUser(UserDTO dto);

    void updateUserFromDto(UserDTO dto, @MappingTarget User target);
    void updateDtoFromUser(User user, @MappingTarget UserDTO target);
}
