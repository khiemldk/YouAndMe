package com.youandme.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import com.youandme.dto.ActivityDTO;
import com.youandme.request.PageRequest;
import com.youandme.service.FriendService;
import com.youandme.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.youandme.dto.FriendsDTO;
import com.youandme.entities.Friend;
import com.youandme.entities.FriendRequest;
import com.youandme.entities.User;
import com.youandme.request.FriendRequestRequest;
import com.youandme.request.UserRequest;
import com.youandme.response.BaseResponse;
import com.youandme.response.FriendRequestResponse;
import com.youandme.response.FriendResponse;
import com.youandme.until.Error;

@RestController
public class FriendController extends BaseController {
    @Autowired
    FriendService friendService;

    @Autowired
    UserService userService;


    @GetMapping("/getfriends")
    public FriendResponse getFriend(@PathVariable int id, @PathVariable PageRequest pageRequest) {
        FriendResponse response = new FriendResponse();

        List<User> friends = userService.getListFriendById(id);
        List<FriendsDTO> friendsDTOList = friends.stream().
                map(c -> FriendsDTO.formatFromFriend(c)).collect(Collectors.toList());

        response.setList(friendsDTOList);
		Page<FriendsDTO> page = setUpPage(friendsDTOList, pageRequest.getPageNumber(), pageRequest.getPageSize());
        response.setTotalPage(page.getTotalPages());
        response.setTotalFriend(friendsDTOList.size());
        return response;
    }

    @PostMapping("/insert/request")
    public BaseResponse insertRequest(@RequestBody FriendRequestRequest request) {
        if (request != null) {
            if (request.getUserId() != null) {
                User user = findById(request.getUserId());
                if (user != null) {
                    User user2 = findById(request.getUserId2());
                    if (user2 != null) {
                        FriendRequest friendRequest = new FriendRequest();
                        friendRequest.setUserId(request.getUserId());
                        friendRequest.setUserId2(request.getUserId2());
                        friendRequest.setActiveFlag(true);
                        friendRequest.setCreateDate(new Date());
                        friendRequest.setUpdateDate(new Date());
                        InsertFriendRequest(friendRequest);
                        return new FriendRequestResponse(Error.SUCCESS);
                    } else {
                        return new FriendRequestResponse(Error.ID_NOT_FOUND);
                    }
                } else {
                    return new FriendRequestResponse(Error.ID_NOT_FOUND);
                }
            } else {
                return new FriendRequestResponse(Error.UNKNOWN);
            }
        } else {
            return new FriendRequestResponse(Error.UNKNOWN);
        }
    }

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
