package com.example.registerUser.Service;

import com.example.registerUser.Entity.User;
import com.example.registerUser.Repo.UserRepo;
import com.example.registerUser.Repo.UserUpdateRepo;
import com.example.registerUser.Requests.UpdateRequestUser;
import com.example.registerUser.Responses.UserResponse;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;


public class UserService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private ModelMapper mapper;
    @Autowired
    private UserUpdateRepo userUpdateRepo;
    public UserResponse insertData(User user){
        User user2 = mapper.map(user,User.class);
        User savedUser = userRepo.save(user2);
        UserResponse userResponse =  mapper.map(savedUser,UserResponse.class);
        return userResponse;
    }
    public UserResponse getDataByID(int id){
        Optional<User> user = userRepo.findById(id);
        /*
        * This indicates that the variable user is of type Optional<User>. In Java, Optional is a container object which
        * may or may not contain a non-null value. It's used to avoid null checks and prevent NullPointerException.
        * */
        UserResponse userResponse = mapper.map(user,UserResponse.class);
        return userResponse;
    }
    public void removeUserByID(int id) throws Exception{
        userRepo.deleteById(id);
    }
    public UpdateRequestUser updateUserByID(int id,UpdateRequestUser updateRequestUser) throws Exception{
        Optional<UpdateRequestUser> existingUserOptional = userUpdateRepo.findById(id);
        if(existingUserOptional.isPresent()){
            UpdateRequestUser existingEntity = existingUserOptional.get();
            existingEntity.setAddress(updateRequestUser.getAddress());
            existingEntity.setFirst_Name(updateRequestUser.getFirst_Name());
            existingEntity.setLast_Name(updateRequestUser.getLast_Name());
            existingEntity.setUser_Name(updateRequestUser.getUser_Name());
            existingEntity.setPassword(updateRequestUser.getPassword());
            existingEntity.setMobile_Number(updateRequestUser.getMobile_Number());
            existingEntity.setNic_Number(updateRequestUser.getNic_Number());
            return userUpdateRepo.save(existingEntity);
        }else{
            throw new RuntimeException("Entity with ID " + id + " not found.");
        }
    }
}
