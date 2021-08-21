package com.youandme.controller;

import com.youandme.dto.FriendsDTO;
import com.youandme.entities.Friend;
import com.youandme.entities.FriendRequest;
import com.youandme.entities.User;
import com.youandme.request.FriendRequestRequest;
import com.youandme.request.PageRequest;
import com.youandme.response.BaseResponse;
import com.youandme.response.FriendRequestResponse;
import com.youandme.response.FriendResponse;
import com.youandme.service.FriendService;
import com.youandme.service.UserService;
import com.youandme.until.Error;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/auth")
public class FriendController extends BaseController {
    @Autowired
    FriendService friendService;

    @Autowired
    UserService userService;


    @GetMapping("/getfriends")
    public FriendResponse getFriend(@RequestParam int id,
                                    @RequestBody(required = false)
                                            PageRequest pageRequest) throws Exception {
        try {
            List<User> friends = userService.getListFriendById(id);
            List<FriendsDTO> friendsDTOList = friends.stream().
                    map(c -> FriendsDTO.formatFromFriend(c)).collect(Collectors.toList());
            Page<FriendsDTO> page = setUpPage(friendsDTOList, pageRequest.getPageNumber(), pageRequest.getPageSize());
            return new FriendResponse(Error.SUCCESS,friendsDTOList,page.getTotalPages(),friendsDTOList.size());
        }catch (Exception e){
            return new FriendResponse(Error.UNKNOWN, new ArrayList<>(), 0,0);
        }
    }


    /*@PostMapping("/insert/request")
    public BaseResponse insertRequest(@RequestBody FriendRequestRequest request) {

        try {
            if(ObjectUtils.isEmpty(request)){
                Friend friend
            }
        }
    }*/

    @PostMapping("/delete/request")
    public BaseResponse deleteFriendRequest(@RequestBody FriendRequestRequest request) {
        if (request != null) {
            if (request.getId() != null) {
                FriendRequest friendRequest = findFriendRequestById(request.getId());
                if (friendRequest != null) {
                    deleteFriendRequest(friendRequest);
                    return new FriendRequestResponse(Error.SUCCESS);
                } else {
                    return new FriendRequestResponse(Error.UNKNOWN);
                }
            } else {
                return new FriendRequestResponse(Error.ID_NOT_FOUND);
            }
        } else {
            return new FriendRequestResponse(Error.UNKNOWN);
        }
    }
}
