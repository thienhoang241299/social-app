// Nhập các thư viện cần thiết
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { InstagramEmbed, TikTokEmbed, YouTubeEmbed } from "react-social-media-embed";

// Hàm chính
export default function Iframe(link: any) {
  // Khởi tạo state cho link nhúng
  const [linkEmbed, SetLinkEmbed] = useState<React.ReactNode>(null);

  // Sử dụng useEffect để cập nhật state khi link thay đổi
  useEffect(() => {
    switch (link.embed) {
      case "tiktok":
        // Nếu link là TikTok, cập nhật state với TikTokEmbed
        SetLinkEmbed(<TikTokEmbed url={link.urlLink} width={325} />);
        break;
      case "youtube":
        // Nếu link là YouTube, cập nhật state với YouTubeEmbed
        SetLinkEmbed(<YouTubeEmbed url={link.urlLink} width={325} />);
        break;
      case "instagram":
        // Nếu link là Instagram, cập nhật state với InstagramEmbed
        SetLinkEmbed(<InstagramEmbed url={link.urlLink} width={325} />);
        break;

      default:
        // Nếu không phải là một trong các loại trên, không làm gì
        break;
    }
  }, [link.embed, link.urlLink]); // Chạy lại useEffect khi link.embed hoặc link.urlLink thay đổi

  // Trả về component với link nhúng
  return <div className="m-2 rounded-3xl">{linkEmbed}</div>;
}
