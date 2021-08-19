package com.youandme.response;

import com.youandme.until.Error;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BaseResponse {
    private int errorCode;
    private String message;
    private String accsessToken;

    public BaseResponse(Error error) {
        this.errorCode = error.getErrorCode();
        this.message = error.getErrorDescription();
    }
    public BaseResponse(String accsessToken){
        this.accsessToken = accsessToken;
    }
}
