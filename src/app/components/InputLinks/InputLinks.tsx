// Import các action từ Redux slice để quản lý trạng thái ứng dụng
import { add, chooseVideo } from "@/redux/slice/socialSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

// Component InputLinks dùng để nhập link và thêm link vào trạng thái Redux
export default function InputLinks() {
  // Lấy dispatch từ React-Redux để dispatch các action
  const dispatch = useDispatch();

  // State để lưu trữ link nhập vào
  const [link, setLink] = useState("");

  // Hàm xử lý thay đổi giá trị input link
  const handelInputChange = (e: any) => {
    setLink(e.target.value);
  };

  // Hàm xử lý khi nhấn nút "Add Link"
  const handelInputLink = () => {
    
    // Kiểm tra xem link nhập vào có hợp lệ (từ YouTube, Instagram, hoặc TikTok)
    if (link.includes("www.youtube.com") || link.includes("youtu.be") || link.includes("www.instagram.com") || link.includes("www.tiktok.com")) {
      // Reset thuộc tính "link" và "embed" trong store (có thể để chuẩn bị cho link mới)
      dispatch(chooseVideo({ link: "", embed: "" }));
      
      // Nếu hợp lệ, dispatch action "add" để thêm link vào store
      dispatch(add(link));
    } else {
      // Nếu không hợp lệ, hiển thị thông báo lỗi
      alert("Vui lòng nhập Link hợp lệ");
    }
  };

  // Render giao diện component
  return (
    <div className="my-4 w-4/5">
      <div className="">
        <div className="relative h-10 w-full min-w-[200px]">
          {/* Input field để nhập link */}
          <input
            className="..." // (classNames for styling)
            placeholder=""
            onChange={handelInputChange}
            value={link}
          />

          {/* Label cho input field */}
          <label className="...">Enter link</label>

          {/* Nút "Add Link" để thêm link */}
          <button onClick={handelInputLink} className="...">
            Add Link
          </button>
        </div>
      </div>
    </div>
  );
}
