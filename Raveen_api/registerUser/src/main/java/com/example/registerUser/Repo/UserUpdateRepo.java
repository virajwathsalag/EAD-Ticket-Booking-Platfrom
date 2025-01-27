package com.example.registerUser.Repo;

import com.example.registerUser.Entity.User;
import com.example.registerUser.Requests.UpdateRequestUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserUpdateRepo extends JpaRepository<UpdateRequestUser, Integer> {

}
