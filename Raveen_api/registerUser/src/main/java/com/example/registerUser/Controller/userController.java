package com.example.registerUser.Controller;

import com.example.registerUser.Entity.User;
import com.example.registerUser.Requests.UpdateRequestUser;
import com.example.registerUser.Responses.UserResponse;
import com.example.registerUser.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class userController {
  @Autowired
  private UserService userService;

    @PostMapping("/test/registerUser")
    private ResponseEntity<UserResponse> getEmployeeDetails(@RequestBody User user){
        UserResponse userResponse = userService.insertData(user);
        return ResponseEntity.status(HttpStatus.OK).body(userResponse);
    }
    @GetMapping("/user/getUserById/{id}")
    private ResponseEntity<UserResponse>getUserByID(@PathVariable("id") int id){
        UserResponse userResponse = userService.getDataByID(id);
        return ResponseEntity.status(HttpStatus.OK).body(userResponse);
    }
    @DeleteMapping("/user/deleteDatabyID/{id}")
    private ResponseEntity<Void> deleteByID(@PathVariable("id") int id){
        try{
            userService.removeUserByID(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception ee){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        /*
        * ResponseEntity<User>: This is the return type of the method. The method will return a ResponseEntity object that contains a User object.
        *  ResponseEntity allows for customizing the HTTP response, including status code, headers, and the body content.*/
    }
    @PutMapping("/user/UpdateData/{id}")
    private ResponseEntity<UpdateRequestUser> updateByData(@PathVariable int id,@RequestBody UpdateRequestUser updateRequestUser){
        try{
            UpdateRequestUser updatedEntity = userService.updateUserByID(id,updateRequestUser);
            return ResponseEntity.ok(updatedEntity);
        }catch (Exception ee){
            return ResponseEntity.notFound().build();
        }
    }
}
