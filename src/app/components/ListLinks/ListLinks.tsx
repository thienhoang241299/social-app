// Import các action từ Redux slice để quản lý trạng thái ứng dụng
import { chooseVideo, deleteVideo } from "@/redux/slice/socialSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Component ListLinks dùng để hiển thị danh sách link và xử lý chọn/xóa link
export default function ListLinks() {
  // Lấy danh sách link từ trạng thái Redux
  const linkUrl = useSelector((state: any) => state.socialSlice.linkSocial);
  // Lấy dispatch từ React-Redux để dispatch các action
  const dispatch = useDispatch();

  // Hàm xử lý khi chọn một link
  const handelChooseVideo = (n: string) => {
    // Dispatch action "chooseVideo" để chọn link đó (có thể để hiển thị trong iframe)
    dispatch(chooseVideo(n));
  };

  // Hàm xử lý khi xóa một link
  const deleteIframe = (n: number) => {
    // Dispatch action "deleteVideo" để xóa link đó khỏi trạng thái Redux
    dispatch(deleteVideo(n));
  };

  // Render giao diện component
  return (
    <div className="list-none w-4/5 border-2 rounded-3xl my-12 p-2">
      {/* Duyệt qua từng link và hiển thị chúng */}
      {linkUrl.map((v: any, i: number) => {
        return (
          <div key={i} className="flex items-center mt-2">
            {/* Hiển thị link dưới dạng item có thể click được */}
            <li className="box-content break-words border-2 rounded-3xl m-2 p-2 w-10/12" onClick={() => handelChooseVideo(v)}>
              {v.link}
            </li>
            {/* Nút "x" để xóa link */}
            <span onClick={() => deleteIframe(i)} className="rounded-full p-1 border-2 border-gray-600">
              x
            </span>
          </div>
        );
      })}
    </div>
  );
}
