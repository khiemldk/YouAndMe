package com.youandme.until;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@ToString
public enum Error {
	SUCCESS(0,"Thành công"),
	UNDEFINED(999,"Lỗi chưa được định nghĩa"),
    UNKNOWN(998,"Lỗi không xác định"),
	ID_NOT_FOUND(1,"Lỗi không tìm thấy Id"),
	WRONG_USERNAME(2,"Sai tên đăng nhập"),
	WRONG_PASSWORD(3,"Sai mật khẩu"),
	SYNTAX_EMAIL(4,"Lỗi định dạng email"),
	SYNTAX_PHONE_NUMBER(5,"Lỗi định dạng số điện thoại"),
	VALID_EMAIL(6,"Đã tồn tại email")
	;
	public int errorCode;
    public String errorDescription;

    Error(int errorCode, String errorDescription){
        this.errorCode = errorCode;
        this.errorDescription = errorDescription;
    }
}
