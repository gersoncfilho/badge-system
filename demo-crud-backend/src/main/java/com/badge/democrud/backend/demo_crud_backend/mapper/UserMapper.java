package com.badge.democrud.backend.demo_crud_backend.mapper;

import com.badge.democrud.backend.demo_crud_backend.model.User;
import com.badge.democrud.backend.demo_crud_backend.model.dto.UserUpdateDTO;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface UserMapper {
    void updateFromDto(UserUpdateDTO dto, @MappingTarget User target);
}
