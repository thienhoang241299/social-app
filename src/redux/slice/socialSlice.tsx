// Nhập các thư viện cần thiết
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Khai báo interface cho thông tin mạng xã hội
interface socialInfo {
  linkSocial: Array<object>; // Mảng chứa các link mạng xã hội
  linkVideo: object; // Đối tượng chứa thông tin video
}

// Khởi tạo state ban đầu
const initialState: socialInfo = {
  linkSocial: [{ link: "https://www.tiktok.com/@epicgardening/video/7315043972890496288", embed: "tiktok" }],
  linkVideo: { link: "", embed: "" },
};

// Tạo slice cho Redux
export const socialSlice = createSlice({
  name: "socialLink", // Tên của slice
  initialState, // State ban đầu
  reducers: {
    // Các reducer
    add: (state, { payload, type: string }) => {
      // Reducer để thêm link
      const linkUrl: string = payload; // Lấy link từ payload
      let embed: string = ""; // Khởi tạo biến embed
      switch (
        true // Kiểm tra loại link
      ) {
        case linkUrl.includes("youtu"):
          embed = "youtube"; // Nếu link chứa "youtu" thì đặt embed là "youtube"
          break;
        case linkUrl.includes("instagram"):
          embed = "instagram"; // Nếu link chứa "instagram" thì đặt embed là "instagram"
          break;
        case linkUrl.includes("tiktok"):
          embed = "tiktok"; // Nếu link chứa "tiktok" thì đặt embed là "tiktok"
          break;

        default:
          break;
      }
      return {
        ...state, // Trả về state mới
        linkSocial: [
          // Cập nhật mảng linkSocial
          ...state.linkSocial, // Giữ nguyên các phần tử cũ
          {
            // Thêm phần tử mới
            link: payload,
            embed: embed,
          },
        ],
      };
    },
    chooseVideo: (state, { payload, type: string }) => {
      // Reducer để chọn video
      return {
        ...state, // Trả về state mới
        linkVideo: {
          // Cập nhật linkVideo
          link: payload.link, // Cập nhật link
          embed: payload.embed, // Cập nhật loại embed
        },
      };
    },
    deleteVideo: (state: any, { payload, type: string }) => {
      // Reducer để xóa video
      return {
        ...state, // Trả về state mới
        linkSocial: [...state.linkSocial].filter((v, i, arr) => {
          // Cập nhật mảng linkSocial
          return i != payload; // Loại bỏ phần tử có index bằng payload
        }),
      };
    },
  },
});

// Xuất các action và reducer
export const { add, chooseVideo, deleteVideo } = socialSlice.actions;
export default socialSlice.reducer;
