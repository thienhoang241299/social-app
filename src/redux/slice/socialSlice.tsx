import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface socialInfo {
  linkSocial: Array<object>;
  linkVideo: object;
}
const initialState: socialInfo = {
  linkSocial: [{ link: "https://www.tiktok.com/@epicgardening/video/7315043972890496288", embed: "tiktok" }],
  linkVideo: { link: "", embed: "" },
};
export const socialSlice = createSlice({
  name: "socialLink",
  initialState,
  reducers: {
    add: (state, { payload, type: string }) => {
      const linkUrl: string = payload;
      let embed: string = "";
      switch (true) {
        case linkUrl.includes("youtu"):
          embed = "youtube";
          break;
        case linkUrl.includes("instagram"):
          embed = "instagram";
          break;
        case linkUrl.includes("tiktok"):
          embed = "tiktok";
          break;

        default:
          break;
      }
      return {
        ...state,
        linkSocial: [
          ...state.linkSocial,
          {
            link: payload,
            embed: embed,
          },
        ],
      };
    },
    chooseVideo: (state, { payload, type: string }) => {
      return {
        ...state,
        linkVideo: {
          link: payload.link,
          embed: payload.embed,
        },
      };
    },
    deleteVideo: (state: any, { payload, type: string }) => {
      // [...state.linkSocial].splice(1, 1);
      return {
        ...state,
        linkSocial: [...state.linkSocial].filter((v, i, arr) => {
          return i != payload;
        }),
      };
    },
  },
});

export const { add, chooseVideo, deleteVideo } = socialSlice.actions;
export default socialSlice.reducer;
