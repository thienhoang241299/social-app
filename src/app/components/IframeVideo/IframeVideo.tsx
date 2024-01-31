// Import component Iframe để hiển thị nội dung từ link
import Iframe from "@/components/Iframe/Iframe";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// Component IframeVideo dùng để hiển thị iframe
export default function IframeVideo() {
  // Lấy danh sách link từ trạng thái Redux
  const linkUrl = useSelector((state: any) => state.socialSlice.linkSocial);
  // Lấy link được chọn từ trạng thái Redux
  const linkVideo = useSelector((state: any) => state.socialSlice.linkVideo);

  // Render giao diện component
  return (
    <div className="flex flex-wrap">
      {/* Kiểm tra xem có link nào được nhập chưa */}
      {linkUrl[0] == null ? (
        "Vui lòng nhập Link Video"
      ) : linkVideo.link == "" ? (
        // Nếu chưa chọn link cụ thể, hiển thị tất cả các link trong linkUrl
        <>
          <div className="flex flex-col">
            {/* Chia các link thành 2 cột */}
            {linkUrl.map((v: any, i: number) => {
              if (i % 2 == 0) {
                return <Iframe key={i} urlLink={v.link} embed={v.embed} />;
              }
            })}
          </div>
          <div className="flex flex-col">
            {linkUrl.map((v: any, i: number) => {
              if (i % 2 == 1) {
                return <Iframe key={i} urlLink={v.link} embed={v.embed} />;
              }
            })}
          </div>
        </>
      ) : (
        // Nếu đã chọn link cụ thể, hiển thị chỉ link đó
        <div className="flex flex-col">
          <Iframe urlLink={linkVideo.link} embed={linkVideo.embed} />
        </div>
      )}
    </div>
  );
}
